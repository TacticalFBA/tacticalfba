import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  button: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));

function getSteps() {
  return ["Design Insert", "Factory Address", "Choose Quantitiy", "Check Out"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return "Choose a template or upload your own";
    case 1:
      return "Where should we send these inserts? Shipping is free!";
    case 2:
      return "";
    default:
      return "Unknown step";
  }
}

export default function HorizontalLinearStepper({ step }) {
  const classes = useStyles();
  const steps = getSteps();
  return (
    <div className={classes.root}>
      <Stepper
        activeStep={step}
        style={{
          backgroundColor: "transparent",
          marginTop: "2rem"
        }}
      >
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {step === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
          </div>
        ) : (
          <div className={classes.instructions}>
            <Typography align="center">{getStepContent(step)}</Typography>
          </div>
        )}
      </div>
    </div>
  );
}
