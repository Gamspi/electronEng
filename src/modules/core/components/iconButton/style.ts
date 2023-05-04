import styled, {css} from "styled-components";
import {Colors} from "../../styles/enums/colors";
import {StyleArgsType} from "./IconButton";


const StyledIconButton = {
    body: styled.button<StyleArgsType>`
      background: ${Colors.WHITE};
      width: ${({size}) => `${((size || 24) / 10)}rem`};
      height: ${({size}) => `${((size || 24) / 10)}rem`};
      padding: .3rem;
      border-radius: 50%;
      cursor: pointer;
      transition: background-color .15s linear;

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
