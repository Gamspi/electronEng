import styled from "styled-components";
import {Colors} from "../../../../../core/styles/enums/colors";

export const StyledWordsForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

`
export const StyledWordsFormContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 50;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: ${Colors.WHITE}4D; 
`
