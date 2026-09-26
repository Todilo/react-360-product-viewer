import React, { useEffect, useMemo, useRef, useState } from "react";
import { styled, css } from "styled-components";
import AnimationImage from "../AnimationImage/AnimationImage";
import StyledRotateIcon from "../icons/StyledRotateIcon";
import type { HtmlHTMLAttributes, ReactNode } from "react";

// The regular % can return negative numbers.
function moduloWithoutNegative(value: number, n: number): number {
  return ((value % n) + n) % n;
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
  autoplay?: boolean;
  autoplayTarget?: number;
  width?: number;
  height?: number;
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
}

const StyledDiv = styled.div<StyleProps>`
  position: relative;
  border: none;
  padding: 5px;
  display: inline-block;
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
  autoplaySpeed = 10,
  autoplay = false,
  autoplayTarget,
  width = 150,
  height = 150,
  zeroPad = 0,
  showRotationIconOnStartup = false,
  customRotationIcon,
  imageInitialIndex = 0,
  shouldNotifyEvents = false,
  notifyOnPointerDown,
  notifyOnPointerUp,
  notifyOnPointerMoved,
}: React360ViewerPropsExtended) => {
  const activePointerId = useRef<number | null>(null);
  const [isScrolling, setIsScrolling] = useState(false);
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
  ]);

  const incrementImageIndex = (change: number) => {
    let index = moduloWithoutNegative(
      selectedImageIndex + (reverse ? -1 : 1) * Math.floor(change),
      imagesCount
    );

    setSelectedImageIndex(index);

    if (autoplayTarget !== undefined && index === autoplayTarget) {
      setUseAutoplay(false);
    }
  };

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
    setInitialMousePosition(e.clientX);
    setCurrentMousePosition(e.clientX);
    setStartingImageIndexOnPointerDown(selectedImageIndex);
    setUseAutoplay(false);
    setIsScrolling(true);
    setShowRotationIcon(false);

    if (shouldNotifyEvents) notifyOnPointerDown?.(e.clientX, e.clientY);
  };

  const onPointerEnd = (e: React.PointerEvent<HTMLDivElement>) => {
    if (activePointerId.current !== e.pointerId) return;
    activePointerId.current = null;
    setIsScrolling(false);
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
    if (shouldNotifyEvents) notifyOnPointerUp?.(e.clientX, e.clientY);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (activePointerId.current !== e.pointerId) return;

    setCurrentMousePosition(e.clientX);

    if (shouldNotifyEvents) notifyOnPointerMoved?.(e.clientX, e.clientY);
  };

  useEffect(() => {
    const imageIndexWithOffset = (start: number, offset: number) => {
      let index = moduloWithoutNegative(
        start + (reverse ? -1 : 1) * Math.floor(offset),
        imagesCount
      );
      setSelectedImageIndex(index);
    };

    if (!isScrolling || imagesCount <= 0 || mouseDragSpeed <= 0 || width <= 0)
      return;

    // Aim is to get a speedfactor that can be easily adjusted from a user perspective
    // as well as proportionate to the size of the image.
    const scaleFactor = 100;
    let speedFactor =
      (1 / mouseDragSpeed) * ((imagesCount * width) / scaleFactor);
    const changeInX = currentMousePosition - initialMousePosition;

    let difference = changeInX / speedFactor;

    imageIndexWithOffset(startingImageIndexOnPointerDown, difference);
  }, [
    currentMousePosition,
    imagesCount,
    startingImageIndexOnPointerDown,
    initialMousePosition,
    isScrolling,
    mouseDragSpeed,
    width,
    reverse,
  ]);

  return (
    <StyledDiv
      $isGrabbing={isScrolling}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerEnd}
      onPointerCancel={onPointerEnd}
      onPointerMove={onPointerMove}
      onLostPointerCapture={onPointerEnd}
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
          isVisible={index === selectedImageIndex}
          key={src}
        ></AnimationImage>
      ))}
    </StyledDiv>
  );
};
