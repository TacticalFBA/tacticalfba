import React from "react";
import { data } from "./data";
import Parser from "html-react-parser";

import { Container, Box } from "@material-ui/core";

export default function index() {
  return (
    <Container maxWidth="md">
      <Box mt={5}>
        <h3 style={{ fontWeight: "700", marginBottom: "3rem" }}>FAQ</h3>
        {data.map((item) => (
          <Box my={8}>
            <h6 style={{ fontWeight: "700", marginBottom: "2em" }}>
              {item.question}
            </h6>
            <p>{Parser(item.answer)}</p>
          </Box>
        ))}
      </Box>
    </Container>
  );
}
