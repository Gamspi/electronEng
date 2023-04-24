import styled from "styled-components";
import {Colors} from "../../../../../core/styles/enums/colors";


const StyledWordListItem = {
    CONTAINER: styled.div`
      flex-direction: column;
      align-items: flex-end;
      display: grid;
      grid-template-columns: repeat(3, 1fr) auto;
      gap: 1.6rem;
      border-bottom: .1rem solid ${Colors.WHITE};
      margin-bottom: .8rem;
      padding: .4rem ;
    `,
    CELL: styled.div`
      font-size: 2.4rem;
    `,
    DELETE_BTN : styled.div`
        align-self: center;
      justify-self: center;
    `
}
export default StyledWordListItem
