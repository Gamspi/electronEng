import styled, {css} from "styled-components";
import {Colors} from "../../styles/enums/colors";
import {StyleArgsType} from "./IconButton";
import {ColorType} from "../../styles/enums/colorType";

const StyledIconButton = {
    body: styled.button<StyleArgsType>`
      background: ${Colors.WHITE};
      width: ${({size}) => `${((size || 24) / 10)}rem`};
      height: ${({size}) => `${((size || 24) / 10)}rem`};
      padding: .3rem;
      border-radius: 50%;
      cursor: pointer;
      transition: background-color .15s linear;
      background: ${({colorType})=> {
        switch (colorType) {
          case ColorType.DANGER:
            return Colors.RED
          case ColorType.SUCCESS:
            return Colors.GREEN
          case ColorType.WARNING:
            return Colors.ORANGE
          default:
            return Colors.WHITE
        }
      }};
      &:hover {
        background: #d7d7d7;
      }

      svg, img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    `
}
export default StyledIconButton
