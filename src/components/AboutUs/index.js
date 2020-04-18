import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";

export default function index() {
  return (
    <React.Fragment>
      <Container maxWidth="md">
        <Box mt={5}>
          <Typography variant="h4">
            At TacticalFBA, we are your one-stop Amazon FBA solutions service.
          </Typography>
          <Box mt={2}>
            <Typography variant="p">
              Our US based company has an office in Shanghai allowing us to
              efficiently coordinate value-added FBA services directly with your
              partnering manufacturers in China. Our services include product
              inserts, product photography, bar codes, packaging boxes, and
              package labelling. If you have any questions, feel free to contact
              us <Link to="/contact-us">here</Link>.
            </Typography>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}
