import React from "react";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import ServiceCard from "./ServiceCard";
import { services } from "./carddata";

export default function P2() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      py={10}
      style={{ background: "#ebf0f6" }}
    >
      <Container maxWidth="md">
        <Box mt={5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <div style={{ fontWeight: "700", fontSize: "1.7rem" }}>
                Our Platform
              </div>
              <div style={{ paddingRight: "3rem", paddingTop: "1rem" }}>
                The TacticalFBA platform lets you seamlessly manage the most
                important facets of your ecommerce business.
              </div>
            </Grid>
            {services.map(({ name, content, link }, index) => (
              <Grid key={index} item xs={12} md={4}>
                <ServiceCard name={name} content={content} link={link} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
