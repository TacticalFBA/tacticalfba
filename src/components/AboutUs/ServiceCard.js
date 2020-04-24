import React from "react";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

export default function ServiceCard({ icon, name, content, link }) {
  const styles = {
    box: {
      background: "var(--mainWhite)",
      padding: "2rem",
      borderRadius: "3px",
      height: "300px",
    },
  };
  return (
    <Box style={styles.box}>
      <Box>
        <img
          src={icon}
          alt={name}
          style={{ width: "2.5rem", verticalAlign: "middle" }}
        />
        <span
          style={{
            fontWeight: "700",
            paddingLeft: ".75rem",
            fontSize: "1rem",
            verticalAlign: "middle",
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
