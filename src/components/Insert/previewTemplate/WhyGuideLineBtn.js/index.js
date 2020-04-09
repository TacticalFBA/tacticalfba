import React from "react";
import Button from "@material-ui/core/Button";

import GuideLineModal from "./GuideLineModal";

export default () => {
  const [open, setOpen] = React.useState(false);
  const OpenGuideLineModal = () => {
    setOpen(true);
  };
  const CloseOpenGuideLineModal = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <Button
        size="small"
        color="primary"
        style={{ marginLeft: "1rem", textDecoration: "underline" }}
        onClick={OpenGuideLineModal}
      >
        What are the guide lines for?
      </Button>
      <GuideLineModal
        open={open}
        CloseOpenGuideLineModal={CloseOpenGuideLineModal}
      />
    </React.Fragment>
  );
};
