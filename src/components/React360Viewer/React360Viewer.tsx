import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import AnimationImage from "../AnimationImage/AnimationImage";
import StyledRotateIcon from "../icons/StyledRotateIcon";

// The regular % can return negative numbers.
function moduloWithoutNegative(value: number, n: number): number {
  return ((value % n) + n) % n;
}

export interface React360ViewerProps {
  imagesCount: number;
  imagesBaseUrl: string;
  imagesFiletype: string;
  imageFilenamePrefix: string;
  imageInitialIndex?: number;
  mouseDragSpeed?: number;
  autoplaySpeed?: number;
  reverse: boolean;
  autoplay: boolean;
  width?: number;
  height?: number;
  showRotationIconOnStartup: boolean;
  notifyOnPointerDown?: (x: number, y: number) => void;
  notifyOnPointerUp?: (x: number, y: number) => void;
  notifyOnPointerMoved?: (x: number, y: number) => void;
}

interface StyleProps {
  isGrabbing: boolean;
}

const StyledDiv = styled.div<StyleProps>`
  position: relative;
  border: none;
  padding: 5px;
  display: inline-block;
  user-select: none;
  touch-action: none;
  ${(props) =>
    props.isGrabbing
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
  imagesFiletype,
  imageFilenamePrefix,
  mouseDragSpeed = 20,
  reverse,
  autoplaySpeed = 10,
  autoplay,
  width = 150,
  height = 150,
  showRotationIconOnStartup,
  imageInitialIndex,
  notifyOnPointerDown,
  notifyOnPointerUp,
  notifyOnPointerMoved,
}: React360ViewerProps) => {
  const elementRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [initialMousePosition, setInitialMousePosition] = useState(0);
  const [startingImageIndexOnPointerDown, setStartingImageIndexOnPointerDown] =
    useState(0);
  const [currentMousePosition, setCurrentMousePosition] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [imageSources, setImageSources] = useState<
    Array<{ src: string; index: string }>
  >([]);

  const [showRotationIcon, setShowRotationIcon] = useState(
    showRotationIconOnStartup
  );
  const [useAutoplay, setUseAutoplay] = useState(autoplay);
  useEffect(() => {
    setUseAutoplay(autoplay);

    setShowRotationIcon(!autoplay && showRotationIconOnStartup);
  }, [autoplay, showRotationIconOnStartup]);

  useEffect(() => {
    if (typeof imageInitialIndex === "undefined") return;
    if (imageInitialIndex < 0 || imageInitialIndex >= imagesCount) {
      setSelectedImageIndex(imageInitialIndex);
      console.log(
        `ImageInitialIndex of ${imageInitialIndex} was out of bounds of 0 and count: ${imagesCount}`
      );
    }

    setSelectedImageIndex(imageInitialIndex);
  }, [imageInitialIndex, imagesCount]);

  useEffect(() => {
    if (!useAutoplay) return;

    const timer = setTimeout(() => {
      incrementImageIndex(1);
    }, 1000 / autoplaySpeed);

    return () => clearTimeout(timer);
  });

  const incrementImageIndex = (change: number) => {
    let index = moduloWithoutNegative(
      selectedImageIndex + (reverse ? -1 : 1) * Math.floor(change),
      imagesCount
    );

    setSelectedImageIndex(index);
  };

  useEffect(() => {
    function createImageSources() {
      let srces = [];
      for (let i = 1; i <= imagesCount; i++) {
        srces.push({
          src: `${imagesBaseUrl}${
            imageFilenamePrefix ? imageFilenamePrefix : ""
          }${i}.${imagesFiletype}`,
          index: i.toString(),
        });
      }
      return srces;
    }
    setImageSources(createImageSources());
  }, [imagesBaseUrl, imagesFiletype, imagesCount, imageFilenamePrefix]);

  useEffect(() => {
    const releaseMouseOutsideComponent = () => {
      onMouseUp();
    };
    window.addEventListener("mouseup", releaseMouseOutsideComponent);
    return () => {
      window.removeEventListener("mouseup", releaseMouseOutsideComponent);
    };
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    setInitialMousePosition(e.clientX);
    setCurrentMousePosition(e.clientX);
    setStartingImageIndexOnPointerDown(selectedImageIndex);
    setUseAutoplay(false);
    setIsScrolling(true);
    setShowRotationIcon(false);
    // We prevent-default so user can't "grab" the image
    e.preventDefault();

    notifyOnPointerDown?.(e.clientX, e.clientY);
  };

  const onMouseUp = (e?: React.MouseEvent) => {
    setIsScrolling(false);
    if (typeof e !== "undefined") notifyOnPointerUp?.(e?.clientX, e.clientY);
    else notifyOnPointerUp?.(0, 0);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isScrolling) return;
    notifyOnPointerMoved?.(e.clientX, e.clientY);

    setCurrentMousePosition(e.clientX);
  };

  useEffect(() => {
    const imageIndexWithOffset = (start: number, offset: number) => {
      let index = moduloWithoutNegative(
        start + (reverse ? -1 : 1) * Math.floor(offset),
        imagesCount
      );
      setSelectedImageIndex(index);
    };

    if (!isScrolling) return;

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
    height,
    reverse,
  ]);
  return (
    <StyledDiv
      ref={elementRef}
      isGrabbing={isScrolling}
      onPointerDown={onMouseDown}
      onPointerUp={onMouseUp}
      onPointerMove={onMouseMove}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
    >
      {showRotationIcon ? (
        <StyledRotateIcon widthInEm={2} isReverse={reverse}></StyledRotateIcon>
      ) : null}
      {imageSources.map((s, index) => (
        <AnimationImage
          src={s.src}
          width={width}
          height={height}
          isVisible={index === selectedImageIndex}
          key={index}
        ></AnimationImage>
      ))}
    </StyledDiv>
  );
};
