import React, { ReactElement } from "react";
import { Box, Paper, Typography } from "@mui/material";

interface Props {
  leftData?: string;
  rightData?: string | number;
}

const displayContentStyle = {
  padding: "15px 10px",
  width: "100%",
};

const leftDataStyle = {
  display: "inline"
}
const rightDataStyle = {
  float: "right",
  color: "green",
  display: "inline"
} as const // Fixes Typescript casting error

export default function DisplayEntry({
  leftData,
  rightData,
}: Props): ReactElement {
  return (
    <Paper elevation={1} sx={displayContentStyle}>
      {leftData != null ? <Typography sx={leftDataStyle}>{leftData}</Typography> : ''}
      {rightData != null ? <Typography sx={rightDataStyle}>{rightData}</Typography> : ''}
    </Paper>
  );
}
