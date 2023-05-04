import styled from "styled-components";

const StyledCoreLayout = {
    container: styled.div`
      display: flex;
      flex-direction: column;
    `,
    header: styled.div`
    `,
    content: styled.div`
      position: relative;
      height: calc(100vh - 38px);
      overflow: hidden;
    `
}

export default StyledCoreLayout
