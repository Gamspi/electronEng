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
      grid-column: 1/5;
      
      display: none;
      flex-direction: column;
      @media (max-width: 1024px) {
        grid-column: 1/4;
      }

    `,
    Input: styled.div`
      display: flex;
      flex-direction: column;
      overflow: hidden;
      @media (max-width: 1024px) {
        &:last-child { 
          grid-column: 1/4;
        }
      }

    `
}
export default StyledWordsForm
