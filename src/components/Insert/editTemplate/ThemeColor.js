import React from "react";
import { CompactPicker } from "react-color";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

export default function ThemeColor({ color, handleThemeColor }) {
  const [show, setShow] = React.useState(false);

  return (
    <React.Fragment>
      <Button
        variant="contained"
        size="small"
        disableElevation
        onClick={() => setShow(!show)}
      >
        {show ? "Close Color Picker" : "Open Color Picker"}
      </Button>
      {show === true && (
        <Wrapper>
          <CompactPicker
            color={color}
            onChangeComplete={color => handleThemeColor(color)}
          />
          <p className="text-muted">* You may enter any color hex code</p>
        </Wrapper>
      )}
    </React.Fragment>
  );
}

const Wrapper = styled.div`
  padding-top: 1rem;
  p {
    padding-top: 0.8rem;
    margin-bottom: 0;
  }
`;
