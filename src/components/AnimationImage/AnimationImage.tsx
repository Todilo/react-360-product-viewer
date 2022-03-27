import React from "react";
import styled from "styled-components";

interface ImageProps {
  src: string;
  isVisible: boolean;
  width: number;
  height: number;
}

interface StyledImageProps {}
const StyledImage = styled.img<StyledImageProps>`
  user-select: "none";
  touch-action: "none";
  display: d;
  cursor: "inherit";
`;

const AnimationImage = ({ src, isVisible, width, height }: ImageProps) => {
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

export default AnimationImage;
