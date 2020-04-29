import styled from "styled-components";

export const PreviewContainer = styled.div`
  font-family: Arial, Helvetica, sans-serif !important;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  // width: 1087px;
  // height: 661px;
  width: 100%;
  height: 0;
  padding-bottom: 60.87%;
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
