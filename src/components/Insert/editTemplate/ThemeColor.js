import React from "react";
import { TwitterPicker } from "react-color";
import styled from "styled-components"

export default function ThemeColor({ color, handleThemeColor }) {

  const [show, setShow] = React.useState(false)

  return (
    <React.Fragment>
      <button className="btn btn-sm btn-outline-secondary" onClick={() => setShow(!show)}>{
        show ? "Close Color Picker" : "Open Color Picker"
      }</button>
      {show === true && (
        <Wrapper>
          <TwitterPicker
            color={color}
            onChangeComplete={color => handleThemeColor(color)}
          />
          <p className="text-muted">* You may enter any color hex code</p>
        </Wrapper>)}
    </React.Fragment>
  );
}


const Wrapper = styled.div`
  padding-top: 1rem;
  p {
    padding-top: .8rem;
    margin-bottom: 0;
  }
`