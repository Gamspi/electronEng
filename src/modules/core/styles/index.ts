import {createGlobalStyle} from 'styled-components'
import {Colors} from "./enums/colors";
import {BreakpointsEnum} from "./enums/breakpointsEnum";
const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    border: 0;

    &::-webkit-scrollbar {
      width: .5rem;
    }

    &::-webkit-scrollbar-track {
      background-color: #e4e4e4;
      border-radius: 100px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #407d64;
      border-radius: 100px;
    }
  }

  body {
    color: ${Colors.WHITE};
    background: #0F2027; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #2C5364, #203A43, #0F2027); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    margin: 0;
    word-wrap: break-word;
    overflow-y: auto;
    overflow-x: hidden;
    font-style: normal;
    min-height: 100vh;
    width: 100vw;
    position: relative;
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
