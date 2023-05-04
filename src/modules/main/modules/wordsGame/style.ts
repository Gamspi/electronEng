import styled from "styled-components";

const StyledWordsGame = {
    ACTIONS : styled.div`
      display: flex;
      gap: 1rem;
    `,
    CONTAINER : styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    `,
    BACK : styled.div`
      position: absolute;
      left: .8rem;
      top: .8rem;
    `,
    VALUE: styled.div`
    font-size: 3.2rem;
      margin-bottom: 3.2rem;
    `,
    BODY: styled.div`
      display: flex;
      gap: 1rem;
      align-items: center;
      flex-direction: column;
    `,
    Actions: styled.div`
    display: flex;
      gap: 1.6rem;
    `
}
export default StyledWordsGame
