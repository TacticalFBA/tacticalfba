import styled from "styled-components";

export const PreviewContainer = styled.div`
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  width: 28.5rem;
  height: 17.1rem;
  border: 1px solid #ccc;
  p{
    margin:0;
    padding:0;
  }
`;


export const FullPageContainer = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
