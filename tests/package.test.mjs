import assert from "node:assert/strict";
import { createRequire } from "node:module";
import test from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { ServerStyleSheet } from "styled-components";
import { React360Viewer as ESMViewer } from "react-360-product-viewer";

const require = createRequire(import.meta.url);
const { React360Viewer: CJSViewer } = require("react-360-product-viewer");

test("the published CommonJS and ES module entries load and render", () => {
  for (const Viewer of [CJSViewer, ESMViewer]) {
    const html = renderToStaticMarkup(React.createElement(Viewer, {
      imagesBaseUrl: "/images",
      imagesCount: 2,
      imagesFiletype: "png",
      imageInitialIndex: 3,
    }));
    assert.match(html, /src="\/images\/1\.png"/);
    assert.match(html, /src="\/images\/2\.png"/);
    assert.match(html, /src="\/images\/2\.png"[^>]*display:block/);
  }
});

test("the image index separator is applied to generated image URLs", () => {
  const html = renderToStaticMarkup(React.createElement(ESMViewer, {
    imagesBaseUrl: "/images/frame",
    imageIndexSeparator: "-",
    imagesCount: 1,
    imagesFiletype: ".webp",
  }));
  assert.match(html, /src="\/images\/frame-1\.webp"/);
});

test("container fitting emits the requested image position", () => {
  const sheet = new ServerStyleSheet();
  try {
    renderToStaticMarkup(sheet.collectStyles(React.createElement(ESMViewer, {
      imagesBaseUrl: "/images",
      imagesCount: 1,
      imagesFiletype: "png",
      fillContainer: true,
      imagePosition: "left center",
    })));
    assert.match(sheet.getStyleTags(), /object-position:left center/);
    assert.match(sheet.getStyleTags(), /object-fit:contain/);
  } finally {
    sheet.seal();
  }
});
