import styled from "styled-components";

const StyledWordsList = {
    container : styled.div`
      max-height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    `,
    header: styled.div`
    `,
    actions: styled.div`
      position: absolute;
      right: 1rem;
      bottom: 1rem;
      display: flex;
      gap: 1rem;
      z-index: 10;
    `,
    body: styled.div`
      flex-grow: 1;
      padding: 0 1.4rem;
      margin-bottom: 5rem;
      overflow-y: auto;
      margin-right: 1rem;

    `
}
export default StyledWordsList
