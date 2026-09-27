import React from "react";
import { styled } from "styled-components";

interface ImageProps {
  src: string;
  isVisible: boolean;
  width: number;
  height: number;
  fillContainer: boolean;
  imagePosition?: string;
}

interface StyledImageProps {
  $fillContainer: boolean;
  $imagePosition?: string;
}
const StyledImage = styled.img<StyledImageProps>`
  user-select: none;
  touch-action: none;
  cursor: inherit;
  -webkit-user-drag: none;
  ${(props) =>
    props.$fillContainer &&
    `width: 100%; height: 100%; object-fit: contain; object-position: ${props.$imagePosition ?? "center"};`}
`;

const AnimationImage = ({
  src,
  isVisible,
  width,
  height,
  fillContainer,
  imagePosition,
}: ImageProps) => {
  let d = isVisible ? "block" : "none";
  return (
    <StyledImage
      alt="Rotating object"
      src={src}
      width={width}
      height={height}
      $fillContainer={fillContainer}
      $imagePosition={imagePosition}
      style={{ display: `${d}` }}
    ></StyledImage>
  );
};

export default AnimationImage;
