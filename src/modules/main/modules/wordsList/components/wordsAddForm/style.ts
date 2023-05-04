import styled from "styled-components";

const StyledWordsForm = {
    Container: styled.div`
      padding: .8rem;
      max-width: 100vw;
    `,
    Form: styled.form`
      max-width: 100%;
      display: grid;
      grid-template-columns: repeat(4, auto);
      position: relative;
      gap: 1.6rem;
      z-index: 1;
      align-items: start;
      overflow: hidden;
      @media (max-width: 1024px) {
        grid-template-columns: repeat(3, auto);
      }
    `,
    Button: styled.div`
      @media (max-width: 1024px) {
        grid-column: 1/4;
        display: flex;
        flex-direction: column;
      }

    `,
    Input: styled.div`
      display: flex;
      flex-direction: column;
      overflow: hidden;
    `
}
export default StyledWordsForm
