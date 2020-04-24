import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

export default function P1() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" my={18}>
      <Container maxWidth="md">
        <Grid container spacing={10}>
          <Grid item md={8}>
            <Typography variant="h4">Ecommerce is hard.</Typography>
            <Typography variant="h4">
              TacticalFBA helps you share the load.
            </Typography>
            <Box mt={4}>
              <Typography>
                At TacticalFBA, we are your one-stop Amazon FBA solutions
                service. Our US based company has an office in Shanghai allowing
                us to efficiently coordinate value-added FBA services directly
                with your partnering manufacturers in China.
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4}>
            <img
              src="img/logo-large.png"
              alt="logo"
              style={{ width: "100%" }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
