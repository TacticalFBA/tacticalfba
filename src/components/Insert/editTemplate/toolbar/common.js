import styled from "styled-components";

export const ToolbarItem = styled.div`
  width: 1.75rem;
  height: 1.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  color: var(--mainDark);
  background-color: transparent;
  border-radius: 25%;
  border: 2px solid var(--mainDark);
  font-size: 0.8rem;
  transition: all 0.5m ease-in-out;
  cursor: pointer;
  ${(props) =>
    props.isActive &&
    `
        transform: translateY(1px);
        background-color: var(--mainDark);
        color: var(--mainWhite);
        `}
  &:hover {
    transform: translateY(1px);
    background-color: var(--mainDark);
    color: var(--mainWhite);
  }
`;

export const Container = styled.div`
  display: flex;
  margin-right: 7px;
`;
