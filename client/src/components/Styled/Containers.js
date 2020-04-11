import styled from "styled-components";

export const PreviewContainer = styled.div`
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  // width: 28.5rem;
  // height: 17.1rem;
  width: 100%;
  height: 0;
  padding-bottom: 62.5%;
  // border: 1px solid #ccc;
  p {
    margin: 0;
    padding: 0;
  }
  .bleed {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
  }
`;

export const FullPageContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
