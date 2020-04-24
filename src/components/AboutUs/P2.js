import React from "react";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
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
        <Box>
          <Box textAlign="center" mb={10}>
            <Typography
              variant="h4"
              style={{ marginBottom: "1rem", fontWeight: "900" }}
            >
              Ecommerce is hard.
            </Typography>
            <Typography variant="h4" style={{ fontWeight: "900" }}>
              TacticalFBA makes it easy.
            </Typography>
          </Box>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <div style={{ fontWeight: "700", fontSize: "1.7rem" }}>
                Our Platform
              </div>
              <div style={{ paddingRight: "2rem", paddingTop: "1rem" }}>
                At TacticalFBA, we are your one-stop Amazon FBA solutions
                service. Our US based company has an office in Shanghai allowing
                us to efficiently coordinate value-added FBA services directly
                with your partnering manufacturers in China.
              </div>
            </Grid>
            {services.map(({ icon, name, content, link }, index) => (
              <Grid key={index} item xs={12} md={4}>
                <ServiceCard
                  icon={icon}
                  name={name}
                  content={content}
                  link={link}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
