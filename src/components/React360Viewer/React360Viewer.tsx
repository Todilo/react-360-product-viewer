import React, { useEffect, useMemo, useRef, useState } from "react";
import { styled, css } from "styled-components";
import AnimationImage from "../AnimationImage/AnimationImage";
import StyledRotateIcon from "../icons/StyledRotateIcon";
import type { HtmlHTMLAttributes, ReactNode } from "react";

// The regular % can return negative numbers.
function moduloWithoutNegative(value: number, n: number): number {
  return ((value % n) + n) % n;
}

function imageIndexForDrag(
  startIndex: number,
  startX: number,
  currentX: number,
  imagesCount: number,
  reverse: boolean,
  mouseDragSpeed: number,
  dragWidth: number
): number {
  const speedFactor = (imagesCount * dragWidth) / (mouseDragSpeed * 100);
  const offset = Math.floor((currentX - startX) / speedFactor);
  return moduloWithoutNegative(
    startIndex + (reverse ? -1 : 1) * offset,
    imagesCount
  );
}

export type ZeroPadRange = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export interface React360ViewerProps {
  imagesCount: number;
  imagesBaseUrl: string;
  imageIndexSeparator?: string;
  imagesFiletype: string;
  imageFilenamePrefix?: string;
  imageInitialIndex?: number;
  mouseDragSpeed?: number;
  autoplaySpeed?: number;
  reverse?: boolean;
  /** Smooth pointer movement toward the current drag position. */
  inertia?: boolean;
  autoplay?: boolean;
  autoplayTarget?: number;
  /** When false, stop after one full revolution (or at autoplayTarget). */
  autoplayLoop?: boolean;
  /** When false, resume autoplay after a pointer interaction ends. */
  stopAutoplayOnInteraction?: boolean;
  width?: number;
  height?: number;
  /** Fill the containing element while preserving the image aspect ratio. */
  fillContainer?: boolean;
  imagePosition?: string;
  zeroPad?: ZeroPadRange;
  showRotationIconOnStartup?: boolean;
  customRotationIcon?: () => ReactNode;
  notifyOnPointerDown?: (x: number, y: number) => void;
  notifyOnPointerUp?: (x: number, y: number) => void;
  notifyOnPointerMoved?: (x: number, y: number) => void;
  shouldNotifyEvents?: boolean;
}

/** Base props *and* all available HTML div element props. */
export type React360ViewerPropsExtended = HtmlHTMLAttributes<HTMLDivElement> &
  React360ViewerProps;

interface StyleProps {
  $isGrabbing: boolean;
  $fillContainer: boolean;
}

const StyledDiv = styled.div<StyleProps>`
  position: relative;
  border: none;
  padding: 5px;
  display: inline-block;
  ${(props) =>
    props.$fillContainer &&
    "box-sizing: border-box; width: 100%; height: 100%;"}
  user-select: none;
  touch-action: none;
  ${(props) =>
    props.$isGrabbing
      ? css`
          cursor: grabbing;
        `
      : css`
          cursor: pointer;
        `};
`;

export const React360Viewer = ({
  imagesCount,
  imagesBaseUrl,
  imageIndexSeparator,
  imagesFiletype,
  imageFilenamePrefix,
  mouseDragSpeed = 20,
  reverse = false,
  inertia = false,
  autoplaySpeed = 10,
  autoplay = false,
  autoplayTarget,
  autoplayLoop = true,
  stopAutoplayOnInteraction = true,
  width = 150,
  height = 150,
  fillContainer = false,
  imagePosition,
  zeroPad = 0,
  showRotationIconOnStartup = false,
  customRotationIcon,
  imageInitialIndex = 0,
  shouldNotifyEvents = false,
  notifyOnPointerDown,
  notifyOnPointerUp,
  notifyOnPointerMoved,
  onPointerDown: onPointerDownProp,
  onPointerUp: onPointerUpProp,
  onPointerCancel: onPointerCancelProp,
  onPointerMove: onPointerMoveProp,
  onLostPointerCapture: onLostPointerCaptureProp,
  ...containerProps
}: React360ViewerPropsExtended) => {
  const viewerRef = useRef<HTMLDivElement>(null);
  const activePointerId = useRef<number | null>(null);
  const autoplaySteps = useRef(0);
  const smoothedMousePosition = useRef(0);
  const targetMousePosition = useRef(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isSettling, setIsSettling] = useState(false);
  const [initialMousePosition, setInitialMousePosition] = useState(0);
  const [startingImageIndexOnPointerDown, setStartingImageIndexOnPointerDown] =
    useState(0);
  const [currentMousePosition, setCurrentMousePosition] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(() =>
    imagesCount > 0 ? moduloWithoutNegative(imageInitialIndex, imagesCount) : 0
  );

  const [showRotationIcon, setShowRotationIcon] = useState(
    showRotationIconOnStartup
  );
  const [useAutoplay, setUseAutoplay] = useState(autoplay);
  useEffect(() => {
    setUseAutoplay(autoplay);
    autoplaySteps.current = 0;
  }, [autoplay]);

  useEffect(() => {
    setShowRotationIcon(!autoplay && showRotationIconOnStartup);
  }, [autoplay, showRotationIconOnStartup]);

  useEffect(() => {
    setSelectedImageIndex(
      imagesCount > 0 ? moduloWithoutNegative(imageInitialIndex, imagesCount) : 0
    );
  }, [imageInitialIndex, imagesCount]);

  useEffect(() => {
    if (!useAutoplay || imagesCount <= 0 || autoplaySpeed <= 0) return;

    const timer = setTimeout(() => {
      incrementImageIndex(1);
    }, 1000 / autoplaySpeed);

    return () => clearTimeout(timer);
  }, [
    useAutoplay,
    selectedImageIndex,
    reverse,
    imagesCount,
    autoplaySpeed,
    autoplayTarget,
    autoplayLoop,
  ]);

  const incrementImageIndex = (change: number) => {
    const index = moduloWithoutNegative(
      selectedImageIndex + (reverse ? -1 : 1) * Math.floor(change),
      imagesCount
    );

    setSelectedImageIndex(index);
    autoplaySteps.current += 1;

    if (
      (autoplayTarget !== undefined && index === autoplayTarget) ||
      (!autoplayLoop && autoplaySteps.current >= imagesCount)
    ) {
      setUseAutoplay(false);
    }
  };

  useEffect(() => {
    if (!inertia || !isSettling) return;

    let frame: number;
    const smoothDrag = () => {
      const remaining = targetMousePosition.current - smoothedMousePosition.current;
      if (Math.abs(remaining) < 0.5) {
        smoothedMousePosition.current = targetMousePosition.current;
        setCurrentMousePosition(targetMousePosition.current);
        frame = requestAnimationFrame(() => setIsSettling(false));
        return;
      }

      smoothedMousePosition.current += remaining * 0.2;
      setCurrentMousePosition(smoothedMousePosition.current);
      frame = requestAnimationFrame(smoothDrag);
    };

    frame = requestAnimationFrame(smoothDrag);
    return () => cancelAnimationFrame(frame);
  }, [inertia, isSettling]);

  const imageSources = useMemo(() => {
    const baseUrl =
      imageIndexSeparator !== undefined
        ? imagesBaseUrl + imageIndexSeparator
        : imagesBaseUrl.endsWith("/")
          ? imagesBaseUrl
          : imagesBaseUrl + "/";
    const fileType = imagesFiletype.replace(/^\./, "");
    return Array.from({ length: Math.max(0, imagesCount) }, (_, index) => {
      const number = index + 1;
      const paddedNumber = zeroPad
        ? String(number).padStart(zeroPad + 1, "0")
        : number;
      return `${baseUrl}${imageFilenamePrefix ?? ""}${paddedNumber}.${fileType}`;
    });
  }, [
    imagesBaseUrl,
    imageIndexSeparator,
    imagesFiletype,
    imagesCount,
    imageFilenamePrefix,
    zeroPad,
  ]);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (activePointerId.current !== null || imagesCount <= 0) return;
    activePointerId.current = e.pointerId;
    e.currentTarget.setPointerCapture(e.pointerId);
    setIsSettling(false);
    smoothedMousePosition.current = e.clientX;
    targetMousePosition.current = e.clientX;
    setInitialMousePosition(e.clientX);
    setCurrentMousePosition(e.clientX);
    setStartingImageIndexOnPointerDown(selectedImageIndex);
    setUseAutoplay(false);
    autoplaySteps.current = 0;
    setIsScrolling(true);
    setShowRotationIcon(false);

    if (shouldNotifyEvents) notifyOnPointerDown?.(e.clientX, e.clientY);
  };

  const onPointerEnd = (e: React.PointerEvent<HTMLDivElement>) => {
    if (activePointerId.current !== e.pointerId) return;
    activePointerId.current = null;
    setIsScrolling(false);
    if (autoplay && !stopAutoplayOnInteraction) {
      setIsSettling(false);
      setCurrentMousePosition(targetMousePosition.current);
      const dragWidth = fillContainer
        ? viewerRef.current?.clientWidth || width
        : width;
      if (imagesCount > 0 && mouseDragSpeed > 0 && dragWidth > 0) {
        setSelectedImageIndex(
          imageIndexForDrag(
            startingImageIndexOnPointerDown,
            initialMousePosition,
            targetMousePosition.current,
            imagesCount,
            reverse,
            mouseDragSpeed,
            dragWidth
          )
        );
      }
      autoplaySteps.current = 0;
      setUseAutoplay(true);
    }
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
    if (shouldNotifyEvents) notifyOnPointerUp?.(e.clientX, e.clientY);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (activePointerId.current !== e.pointerId) return;

    targetMousePosition.current = e.clientX;
    if (inertia) {
      setIsSettling(true);
    } else {
      setCurrentMousePosition(e.clientX);
    }

    if (shouldNotifyEvents) notifyOnPointerMoved?.(e.clientX, e.clientY);
  };

  useEffect(() => {
    const dragWidth = fillContainer
      ? viewerRef.current?.clientWidth || width
      : width;
    if (
      (!isScrolling && !isSettling) ||
      imagesCount <= 0 ||
      mouseDragSpeed <= 0 ||
      dragWidth <= 0
    )
      return;

    setSelectedImageIndex(
      imageIndexForDrag(
        startingImageIndexOnPointerDown,
        initialMousePosition,
        currentMousePosition,
        imagesCount,
        reverse,
        mouseDragSpeed,
        dragWidth
      )
    );
  }, [
    currentMousePosition,
    imagesCount,
    startingImageIndexOnPointerDown,
    initialMousePosition,
    isScrolling,
    isSettling,
    mouseDragSpeed,
    width,
    fillContainer,
    reverse,
  ]);

  return (
    <StyledDiv
      {...containerProps}
      ref={viewerRef}
      $isGrabbing={isScrolling}
      $fillContainer={fillContainer}
      onPointerDown={(event) => {
        onPointerDown(event);
        onPointerDownProp?.(event);
      }}
      onPointerUp={(event) => {
        onPointerEnd(event);
        onPointerUpProp?.(event);
      }}
      onPointerCancel={(event) => {
        onPointerEnd(event);
        onPointerCancelProp?.(event);
      }}
      onPointerMove={(event) => {
        onPointerMove(event);
        onPointerMoveProp?.(event);
      }}
      onLostPointerCapture={(event) => {
        onPointerEnd(event);
        onLostPointerCaptureProp?.(event);
      }}
    >
      {showRotationIcon ? (
        <>
          {
            customRotationIcon ? (
              <>{customRotationIcon()}</>
            ) : (
              <StyledRotateIcon widthInEm={2} isReverse={reverse}></StyledRotateIcon>
            )
          }
        </>
      ) : null}
      {imageSources.map((src, index) => (
        <AnimationImage
          src={src}
          width={width}
          height={height}
          fillContainer={fillContainer}
          imagePosition={imagePosition}
          isVisible={index === selectedImageIndex}
          key={src}
        ></AnimationImage>
      ))}
    </StyledDiv>
  );
};
