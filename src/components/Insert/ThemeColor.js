import React from "react";
import { TwitterPicker } from "react-color";
import styled from "styled-components"

export default function ThemeColor({ color, handleColorChange }) {

  const [show, setShow] = React.useState(false)

  return (
    <React.Fragment>
      <button className="btn btn-sm btn-outline-dark" onClick={() => setShow(!show)}>Choose Theme Color</button>
      {show === true && (
        <Wrapper>
          <TwitterPicker
            color={color}
            onChangeComplete={color => handleColorChange(color)}
          />
        </Wrapper>)}
    </React.Fragment>
  );
}


const Wrapper = styled.div`

  padding: 20px 0;

`