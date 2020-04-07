import React from "react";
import { UserConsumer } from "../../contexts/UserContext";
import Button from "@material-ui/core/Button";
import Backdrop from "@material-ui/core/Backdrop";
import Box from "@material-ui/core/Box";

export default function FinishSignUp() {
  return (
    // <Box className="juzhong" style={{ height: "90vh" }}>
    //   <Backdrop open={true} style={{ color: "#fff", zIndex: 1 }}></Backdrop>
    <UserConsumer>
      {({ SignIn }) => {
        SignIn();
        //   return (
        //     <Button
        //       variant="contained"
        //       color="primary"
        //       style={{ zIndex: 2 }}
        //       onClick={() => SignIn()}
        //     >
        //       Sign Me In
        //     </Button>
        //   );
      }}
    </UserConsumer>
    // </Box>
  );
}
