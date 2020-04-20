import React, { useState } from "react";
import OpenLoginModal from "../OpenLoginModal";

// UI
import Box from "@material-ui/core/Box";

// Components
import Stepper from "./Stepper";
import TemplateList from "./TemplateList";
import EditTemplate from "./editTemplate/EditTemplate";
import Address from "../Address/Address";
import Cart from "../Cart/Cart";

export default ({ history, location }) => {
  const [step, setStep] = useState(0);
  const stepForward = () => {
    setStep(step + 1);
  };
  const toStepThree = () => {
    setStep(2);
  };
  const toStepOne = () => {
    setStep(0);
  };
  return (
    <div className="container">
      {/* <OpenLoginModal /> */}
      <Stepper step={step} />
      {/* steps */}
      <React.Fragment>
        {step === 0 && (
          <TemplateList
            history={history}
            location={location}
            stepForward={stepForward}
            toStepThree={toStepThree}
          />
        )}
        {step === 1 && (
          <EditTemplate location={location} stepForward={stepForward} />
        )}
        {step === 2 && (
          <Address
            history={history}
            location={location}
            stepForward={stepForward}
          />
        )}
        {step === 3 && (
          <Cart history={history} location={location} toStepOne={toStepOne} />
        )}
      </React.Fragment>
      <Box pb={5}>{""}</Box>
    </div>
  );
};
