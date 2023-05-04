import styled from "styled-components";
import {Colors} from "../../styles/enums/colors";
type StyledArgsType = {
    isError?: boolean
}

export const StyledCustomInput = styled.input<StyledArgsType>`
  font-size: 1.6rem;
  padding: .8rem;
  border-radius: .8rem !important;
  max-height: content-box;
  overflow: hidden;
  outline: none;
  transition: background-color .15s linear;

  &:hover {
    background: #dedede;
  }

  &:focus {
    background: #ebfffc;
  }

  border: ${
          props => props.isError ? '.1rem solid red' : 'none'
  };
`
