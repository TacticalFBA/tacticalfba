import React from "react";
import { UserConsumer } from "../../contexts/UserContext";
import Button from "@material-ui/core/Button";
import Backdrop from "@material-ui/core/Backdrop";
import Box from "@material-ui/core/Box";
import Spinner from "../Spinner";

export default function FinishSignUp() {
  const [spin, setSpin] = React.useState(false);
  return (
    <Box className="juzhong" style={{ height: "90vh" }}>
      <Spinner spin={spin} />
      <Backdrop open={true} style={{ color: "#fff", zIndex: 1 }}></Backdrop>
      <UserConsumer>
        {({ SignIn }) => (
          <Button
            variant="contained"
            color="primary"
            style={{ zIndex: 2 }}
            onClick={() => {
              setSpin(true);
              SignIn();
            }}
          >
            Sign Me In
          </Button>
        )}
      </UserConsumer>
    </Box>
  );
}
