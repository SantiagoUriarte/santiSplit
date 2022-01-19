import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/material";

import React, { ReactElement, useState } from "react";

interface Props {
  style: React.CSSProperties;
  activeStep: number;
}

const boxStyle = {
  width: "100%",
} as React.CSSProperties;

const steps = ["", "", "", ""];

//TODO: Add stepbar logic
export default function Stepbar({ style, activeStep }: Props): ReactElement {
  return (
    <Box
      sx={{
        ...style,
        ...boxStyle,
      }}
    >
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          return (
            <Step key={index}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
}
