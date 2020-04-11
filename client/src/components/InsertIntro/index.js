import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

export default ({ history }) => {
  return (
    <Container maxWidth="md">
      <Box my={5}>
        <Box>
          <Typography variant="subtitle1">
            At TacticalFBA, we are your one-stop Amazon FBA solutions service.
            Our US based company has an office in Shanghai allowing us to
            efficiently coordinate value-added FBA services directly with your
            partnering manufacturers in China.
          </Typography>
        </Box>
        <Box my={2}>
          <Typography variant="subtitle1">
            Get started with 5 easy steps!
          </Typography>
        </Box>
        <Box>
          <Box mb={1}>
            1) Choose from one of our professional templates or upload your own
            design.
          </Box>
          <Box mb={1}>
            2) Customize content to suit your needs. Our two-sided colored
            inserts are 90*54mm and made of high quality card stock.
          </Box>
          <Box mb={1}>
            3) Enter factory address information where the product inserts will
            be shipped. Shipping to the factory is free.
          </Box>
          <Box mb={1}>
            4) Choose your quantity in multiples of 1000. The product insert
            price is $50/1000 inserts. If you require less than 1000, your
            supplier will more than likely be willing to hold the surplus until
            your next order.
          </Box>
          <Box mb={1}>
            5) Once your order is placed, our print shop in Shanghai will print,
            package and ship your order directly to your factory in China for
            insertion. Once your order is on its way, we will send you and your
            supplier contact the tracking number via email.
          </Box>
        </Box>
      </Box>
      <Button
        variant="contained"
        color="primary"
        onClick={() => history.push("/insert/design")}
      >
        Get Started
      </Button>
    </Container>
  );
};
