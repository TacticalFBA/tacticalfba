import React from "react";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

export default function ServiceCard({ name, content, link }) {
  return (
    <Box
      style={{
        // border: "1px solid black",
        background: "var(--mainWhite)",
        padding: "2rem",
        borderRadius: "3px",
        height: "38vh",
      }}
    >
      <Box>
        <PhotoCameraIcon />
        <span
          style={{
            fontWeight: "700",
            paddingLeft: ".5rem",
            fontSize: "1rem",
          }}
        >
          {name}
        </span>
      </Box>
      <Box my={3} style={{ fontSize: "0.9rem" }}>
        {content}
      </Box>
      <Box>
        <Link
          to={link}
          style={{ color: "var(--mainOrange)", fontWeight: "700" }}
        >
          Learn more <NavigateNextIcon />
        </Link>
      </Box>
    </Box>
  );
}
