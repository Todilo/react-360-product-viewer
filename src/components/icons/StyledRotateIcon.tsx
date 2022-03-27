import styled, { css, StyledProps } from "styled-components";
import RotateIcon from "./RotateIcon";

type StyledRotateIconProps = StyledProps<{
  widthInEm: number;
  isReverse: boolean;
}>;

const StyledRotateIcon = styled(RotateIcon)<StyledRotateIconProps>`
  position: absolute;

  fill: #eee;
  text-shadow: 4px 5px black;
  filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
  opacity: 0.8;
  ${(props) =>
    css`
      top: calc(50% -${(props) => props.theme.main} ${props.widthInEm / 2}em);
      left: calc(50% - ${props.widthInEm / 2}em);
      width: ${props.widthInEm}em;
      transform: scaleX(${(props) => (props.isReverse ? "-1" : "1")});
    `};
`;
export default StyledRotateIcon;
