import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";

function moduloWithoutNegative(value: number, n: number) {
  return ((value % n) + n) % n;
}

export interface React360ViewerProps {
  imagesCount: number;
  imagesBaseUrl: string;
  imagesFiletype: string;
  imageFilenamePrefix: string;
  mouseDragSpeed?: number;
  autoplaySpeed?: number;
  reverse: boolean;
  autoplay: boolean;
  width?: number;
  height?: number;
}

interface StyleProps {
  isGrabbing: boolean;
}

const StyledDiv = styled.div<StyleProps>`
  border: none;
  border-radius: 16px;
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

interface StyledImageProps {}
const StyledImage = styled.img<StyledImageProps>`
  user-select: "none";
  touch-action: "none";
  display: d;
  cursor: "inherit";
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
  width = 200,
  height = 200,
}: React360ViewerProps) => {
  const elementRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [initialMousePosition, setInitialMousePosition] = useState(0);
  const [initialImageIndex, setInitialImageIndex] = useState(0);
  const [currentMousePosition, setCurrentMousePosition] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [imageSources, setImageSources] = useState<
    Array<{ src: string; index: string }>
  >([]);

  const [useAutoplay, setUseAutoplay] = useState(autoplay);
  useEffect(() => {
    setUseAutoplay(autoplay);
  }, [autoplay]);

  useEffect(() => {
    if (!useAutoplay) return;
    const timer = setTimeout(() => {
      incrementImage(1);
    }, 1000 / autoplaySpeed);

    return () => clearTimeout(timer);
  });

  const incrementImage = (change: number) => {
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
    setInitialImageIndex(selectedImageIndex);
    setUseAutoplay(false);
    setIsScrolling(true);

    // We prevent-default so user can't "grab" the image
    e.preventDefault();
  };

  const onMouseUp = () => {
    setIsScrolling(false);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isScrolling) return;
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

    const scaleFactor = 100;
    let speedFactor =
      (1 / mouseDragSpeed) * ((imagesCount * width) / scaleFactor);
    const changeInX = currentMousePosition - initialMousePosition;

    let difference = changeInX / speedFactor;

    imageIndexWithOffset(initialImageIndex, difference);
  }, [
    currentMousePosition,
    imagesCount,
    initialImageIndex,
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
      {imageSources.map((s, index) => (
        <Image
          src={s.src}
          width={width}
          height={height}
          isVisible={index === selectedImageIndex}
          key={index}
        ></Image>
      ))}
    </StyledDiv>
  );
};

interface ImageProps {
  src: string;
  isVisible: boolean;
  width: number;
  height: number;
}

const Image = ({ src, isVisible, width, height }: ImageProps) => {
  let d = isVisible ? "block" : "none";
  return (
    <StyledImage
      alt="Rotating object"
      src={src}
      width={width}
      height={height}
      style={{ display: d }}
    ></StyledImage>
  );
};
