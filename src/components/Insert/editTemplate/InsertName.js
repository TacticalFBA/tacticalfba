import React from "react";
import styled from "styled-components";

export default function InsertName({ iName, handleInsertName }) {
  return (
    <React.Fragment>
      <Wrapper>
        <input
          type="text"
          value={iName}
          placeholder="My Template..."
          onChange={e => handleInsertName(e)}
        />
      </Wrapper>
    </React.Fragment>
  );
}

const Wrapper = styled.div`
  max-width: 700px;
  display: flex;
  flex-direction: column;
  height: fit-content;
  input {
    display: flex;
    border-radius: 4px;
    background-color: #fff;
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    font-weight: 300;
    border: #ccc 1px solid;
  }
`;
