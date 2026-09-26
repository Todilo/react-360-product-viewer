import assert from "node:assert/strict";
import test from "node:test";
import { JSDOM } from "jsdom";
import React, { act } from "react";
import { React360Viewer } from "react-360-product-viewer";

const dom = new JSDOM("<!doctype html><html><body></body></html>");
globalThis.window = dom.window;
globalThis.document = dom.window.document;
globalThis.IS_REACT_ACT_ENVIRONMENT = true;

// jsdom dispatches pointer events but does not implement pointer capture.
const capturedPointers = new WeakMap();
dom.window.HTMLElement.prototype.setPointerCapture = function (pointerId) {
  capturedPointers.set(this, pointerId);
};
dom.window.HTMLElement.prototype.hasPointerCapture = function (pointerId) {
  return capturedPointers.get(this) === pointerId;
};
dom.window.HTMLElement.prototype.releasePointerCapture = function (pointerId) {
  if (this.hasPointerCapture(pointerId)) capturedPointers.delete(this);
};

const { createRoot } = await import("react-dom/client");

function dispatchPointer(target, type, pointerId, clientX, clientY = 0) {
  target.dispatchEvent(
    new dom.window.PointerEvent(type, {
      bubbles: true,
      pointerId,
      clientX,
      clientY,
    })
  );
}

function visibleImage(container) {
  return [...container.querySelectorAll("img")].find(
    (image) => image.style.display === "block"
  )?.getAttribute("src");
}

async function mountViewer(extraProps = {}) {
  const container = document.createElement("div");
  document.body.appendChild(container);
  const root = createRoot(container);
  await act(async () => {
    root.render(
      React.createElement(React360Viewer, {
        imagesBaseUrl: "/frames",
        imagesCount: 4,
        imagesFiletype: "png",
        mouseDragSpeed: 1,
        ...extraProps,
      })
    );
  });
  return {
    container,
    viewer: container.firstElementChild,
    async cleanup() {
      await act(async () => root.unmount());
      container.remove();
    },
  };
}

test("dragging captures one pointer, changes frames, and releases it", async () => {
  const notifications = [];
  const mounted = await mountViewer({
    shouldNotifyEvents: true,
    notifyOnPointerDown: (x, y) => notifications.push(["down", x, y]),
    notifyOnPointerMoved: (x, y) => notifications.push(["move", x, y]),
    notifyOnPointerUp: (x, y) => notifications.push(["up", x, y]),
  });
  const { container, viewer } = mounted;
  try {
    assert.equal(visibleImage(container), "/frames/1.png");

    await act(async () => dispatchPointer(viewer, "pointerdown", 1, 100, 20));
    assert.equal(viewer.hasPointerCapture(1), true);

    await act(async () => dispatchPointer(viewer, "pointermove", 2, 106, 25));
    assert.equal(visibleImage(container), "/frames/1.png");
    await act(async () => dispatchPointer(viewer, "pointermove", 1, 106, 25));
    assert.equal(visibleImage(container), "/frames/2.png");

    await act(async () => dispatchPointer(viewer, "pointerup", 1, 106, 25));
    assert.equal(viewer.hasPointerCapture(1), false);
    await act(async () => dispatchPointer(viewer, "pointermove", 1, 112, 30));
    assert.equal(visibleImage(container), "/frames/2.png");
    assert.deepEqual(notifications, [
      ["down", 100, 20],
      ["move", 106, 25],
      ["up", 106, 25],
    ]);
  } finally {
    await mounted.cleanup();
  }
});

test("pointer cancellation ends the drag and permits a new pointer", async () => {
  const mounted = await mountViewer();
  const { container, viewer } = mounted;
  try {
    await act(async () => dispatchPointer(viewer, "pointerdown", 1, 100));
    await act(async () => dispatchPointer(viewer, "pointerdown", 2, 100));
    assert.equal(viewer.hasPointerCapture(1), true);
    assert.equal(viewer.hasPointerCapture(2), false);

    await act(async () => dispatchPointer(viewer, "pointercancel", 1, 100));
    assert.equal(viewer.hasPointerCapture(1), false);
    await act(async () => dispatchPointer(viewer, "pointerdown", 2, 100));
    assert.equal(viewer.hasPointerCapture(2), true);
    await act(async () => dispatchPointer(viewer, "pointermove", 2, 106));
    assert.equal(visibleImage(container), "/frames/2.png");
  } finally {
    await mounted.cleanup();
  }
});

test("losing pointer capture stops frame changes", async () => {
  const mounted = await mountViewer();
  const { container, viewer } = mounted;
  try {
    await act(async () => dispatchPointer(viewer, "pointerdown", 1, 100));
    await act(async () => dispatchPointer(viewer, "pointermove", 1, 106));
    assert.equal(visibleImage(container), "/frames/2.png");

    await act(async () =>
      dispatchPointer(viewer, "lostpointercapture", 1, 106)
    );
    assert.equal(viewer.hasPointerCapture(1), false);
    await act(async () => dispatchPointer(viewer, "pointermove", 1, 112));
    assert.equal(visibleImage(container), "/frames/2.png");
  } finally {
    await mounted.cleanup();
  }
});
