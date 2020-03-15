import React from "react";
import { TwitterPicker } from "react-color";

export default function ThemeColor({ color, handleColorChange }) {
  return (
    <React.Fragment>
      <p>Choose Theme Color:</p>
      <TwitterPicker
        color={color}
        onChangeComplete={color => handleColorChange(color)}
      />
      <p>note: print color might be different</p>
    </React.Fragment>
  );
}
