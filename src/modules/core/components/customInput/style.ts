import styled from "styled-components";


export const StyledCustomInput = styled.input`
  font-size: 1.6rem;
  padding: .8rem;
  border-radius: .8rem;
  max-height: content-box;
  overflow: hidden;
  border: ${
          // @ts-ignore
    props => props.isError ? '.1rem solid red':'none'
};
`
