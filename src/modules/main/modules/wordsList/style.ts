import styled from "styled-components";

const StyledWordsList = {
    CONTAINER : styled.div`
      max-height: 100vh;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
    `,
    ACTIONS: styled.div`
      position: absolute;
      right: .8rem;
      bottom: .8rem;
      display: flex;
      gap: 1rem;
    `,
    BODY: styled.div`
      margin-bottom: 5rem;
      overflow-y: auto;
    `
}
export default StyledWordsList
