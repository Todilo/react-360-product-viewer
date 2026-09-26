import React from "react";
import { React360Viewer } from "react-360-product-viewer";
import type { React360ViewerProps } from "react-360-product-viewer";

const props: React360ViewerProps = {
  imagesBaseUrl: "/frames",
  imagesCount: 4,
  imagesFiletype: "png",
};

React.createElement(React360Viewer, props);
