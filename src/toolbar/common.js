import styled from "styled-components";

export const ToolbarItem = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  color: var(--mainDark);
  background-color: transparent;
  border: 2px solid var(--mainDark);
  font-size: 1rem;
  transition: all 0.5m ease-in-out;
  cursor: pointer;
  ${props =>
        props.isActive &&
        `
        transform: translateY(1px);
        background-color: var(--mainDark);
        color: var(--mainWhite);
        `
    }
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