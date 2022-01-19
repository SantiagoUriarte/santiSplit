import React, { ReactElement } from "react";
import {
  Box,
  Paper,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Details } from "@mui/icons-material";
import { maxWidth } from "@mui/system";

interface Props {
  leftData?: string;
  rightData?: string | number;
  expandedData?: string | ReactElement;
}

const contentContainerStyle = {
  width: "100%",
};

const contentStyle = {
  "& .MuiAccordionSummary-content": {
    display: "flex",
    justifyContent: "space-between",
  },
};

const leftDataStyle = {};
const rightDataStyle = {
  color: "green",
} as const; // Fixes Typescript casting error

export default function DisplayEntry({
  leftData,
  rightData,
  expandedData,
}: Props): ReactElement {
  return (
    <Accordion sx={contentContainerStyle} disableGutters elevation={3}>
      <AccordionSummary
        expandIcon={expandedData != null ? <ExpandMoreIcon /> : ""}
        sx={contentStyle}
      >
        {leftData != null ? (
          <Typography sx={leftDataStyle}>{leftData}</Typography>
        ) : (
          ""
        )}
        {rightData != null ? (
          <Typography sx={rightDataStyle}>{rightData}</Typography>
        ) : (
          ""
        )}
      </AccordionSummary>
      {expandedData != null ? (
        <AccordionDetails>{expandedData}</AccordionDetails>
      ) : (
        ""
      )}
    </Accordion>
  );
}
