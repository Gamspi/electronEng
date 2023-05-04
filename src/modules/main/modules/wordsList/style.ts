import styled from "styled-components";

const StyledWordsList = {
    container : styled.div`
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      flex-grow: 1;
    `,
    header: styled.div`
    `,
    actions: styled.div`
      display: flex;
      justify-content: flex-end;
      gap: 1rem;
      z-index: 10;
      padding: 1.6rem;
    `,
    body: styled.div`
      flex-grow: 1;
      overflow-y: auto;
      margin-right: 1rem;

    `
}
export default StyledWordsList
