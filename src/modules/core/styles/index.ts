import {createGlobalStyle} from 'styled-components'
import {Colors} from "./enums/colors";
import {BreakpointsEnum} from "./enums/breakpointsEnum";
const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    border: 0;
  }

  body {
    color: ${Colors.WHITE};
    background: ${Colors.BLACK};
    margin: 0;
    word-wrap: break-word;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
    font-style: normal;
    min-height: 100vh;
    width: 100vw;
  }

  html, body {
    word-break: break-word;
    font-size: 10px;
    @media (min-width: ${BreakpointsEnum.MOBILE}px) {
      font-size: calc(100vw / ${BreakpointsEnum.MOBILE} * 10);
    }
    @media (min-width: ${BreakpointsEnum.TABLET}px) {
      font-size: calc(100vw / ${BreakpointsEnum.TABLET} * 10);
    }
    @media (min-width: ${BreakpointsEnum.DESKTOP}px) {
      font-size: calc(100vw / ${BreakpointsEnum.DESKTOP} * 10);
    }
    @media (min-width: ${BreakpointsEnum.WIDE_DESKTOP}px) {
      font-size: calc(100vw / ${BreakpointsEnum.WIDE_DESKTOP} * 10);
    }
  }
`
export default GlobalStyle
