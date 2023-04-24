import styled from "styled-components";
import {Colors} from "../../../../../core/styles/enums/colors";

export const StyledWordLostItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.6rem;
  border-bottom: .1rem solid ${Colors.WHITE};
`
export const StyledWordLostItemCell = styled.div`
    font-size: 2.4rem;
`
