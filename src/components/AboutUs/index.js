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
          <Typography variant="h4">Ecommerce is hard.</Typography>
          <Typography variant="h4">
            TacticalFBA helps you share the load.
          </Typography>
          <Box mt={3}>
            <Typography>
              At TacticalFBA, we are your one-stop Amazon FBA solutions service.
              Our US based company has an office in Shanghai allowing us to
              efficiently coordinate value-added FBA services directly with your
              partnering manufacturers in China. Our services include{" "}
              <strong>product inserts</strong>,{" "}
              <strong>product photography</strong>, <strong>bar codes</strong>,
              <strong>packaging boxes</strong>, and{" "}
              <strong>package labelling</strong>. <br />
              If you have any questions, feel free to contact us{" "}
              <Link to="/contact">here</Link>.
            </Typography>
          </Box>
          <Box mt={5}>
            <Typography variant="h4">Our Platform</Typography>
            <Box mt={3}>
              <Typography>
                The TacticalFBA platform lets you seamlessly manage the most
                important facets of your ecommerce business.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}
