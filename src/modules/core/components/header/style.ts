import styled from "styled-components";
import {ColorType} from "../../styles/enums/colorType";
import {Colors} from "../../styles/enums/colors";

type StyleArgsType = {
    colorType?: ColorType
}
const StyledHeader = {
    container : styled.div`
      background: #000000; /* fallback for old browsers */
      background: -webkit-linear-gradient(to right, #434343, #000000); /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to right, #434343, #000000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      box-shadow: inset .2rem .1rem 2rem #000000, 0px 10px 32px rgba(0, 0, 0, 0.37);
      -webkit-user-select: none;
      -webkit-app-region: drag;
      padding: 10px;
      display: flex;
      justify-content: flex-end;
      gap: 10px;

    `,
    button: styled.button<StyleArgsType>`
      background: ${({colorType})=> {
          switch (colorType) {
            case ColorType.DANGER:
                return Colors.RED
            case ColorType.SUCCESS:
                return Colors.GREEN
            case ColorType.WARNING:
                return Colors.ORANGE
            default:
                return Colors.BLACK
          }
      }};
      
      display: flex;
      justify-content: center;
      align-items: center;
      line-height: 0;
      cursor: pointer;
      -webkit-app-region: no-drag; 
      border-radius: 50%;
      width: 18px;
      height: 18px;
      
      overflow: hidden;
    `
}

export default StyledHeader
