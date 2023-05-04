import styled from "styled-components";

const StyledCheckbox = {
    INPUT: styled.input`
      appearance: none;
      width: 2.4rem;
      height: 2.4rem;
      position: relative;
      cursor: pointer;

      &:checked {
        &:after {
          opacity: 1;
        }
      }

      &:before {
        content: '';
        display: block;
        font-size: 2rem;
        color: #dadada;
        position: absolute;
        left: .4rem;
        top: .7rem;
        width: 55%;
        height: 55%;
        border: .1rem solid white;
        border-radius: 50%;
        transform: rotate3d(0, 1, .7, 45deg);
      }

      &:after {
        opacity: 0;
        content: '\\2714';
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        color: white;
        text-shadow: .2rem .2rem .3rem black;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }
    `
}
export default StyledCheckbox
