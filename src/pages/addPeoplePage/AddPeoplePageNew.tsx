import { Box, Container } from "@mui/material";
import React, { ReactElement, useState } from "react";
import InputCard from "../../components/inputCard/InputCard";
import InputCardItems from "../../components/inputCard/InputCardItems";
import Stepbar from "../../components/stepbar/Stepbar";
import Topbar from "../../components/topbar/Topbar";

interface Props {}

const boxStyle = {
  height: "100%",
  width: "100%",
};

const steps = ["", "", "", ""];

//TODO: Add flexbox to align elements
export default function AddPeoplePage({}: Props): ReactElement {
  const [activeStep, setActiveStep] = useState(0);
  return (
    <Box sx={boxStyle}>
      <Topbar />
      <Container fixed maxWidth="md">
        <Stepbar
          activeStep={activeStep}
          style={{
            margin: "20px auto 0",
          }}
        />
        <InputCard
          style={{ margin: "0 auto" }}
          instructionsLabel="Add your friends"
          setActiveStep={setActiveStep}
        />
        {/* <InputCardItems
          style={{ margin: "0 auto" }}
          instructionsLabel="Add bill items"
          listAddLabel="Add item"
          buttonLabel="Add subtotal & tip"
        /> */}
      </Container>
    </Box>
  );
}
