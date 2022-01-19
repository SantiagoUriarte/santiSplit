import { Avatar, Box, Typography } from "@mui/material";
import React, { ReactElement } from "react";
import { theme } from "../../theme";
import logo from "../../media/logo.svg";

interface Props {
  style?: React.CSSProperties;
}

const boxStyle = {
  width: "100vw",
  height: "30vh",
  position: "relative",
  zIndex: -1,
} as React.CSSProperties;

const leftTriangleStyle = {
  width: 0,
  height: 0,
  borderRight: "100vw solid transparent",
  borderTop: `30vh solid ${theme.palette.primary.main}`,
  position: "absolute",
  zIndex: 1,
} as React.CSSProperties;
const rightTriangleStyle = {
  width: 0,
  height: 0,
  borderLeft: "100vw solid transparent",
  borderTop: `30vh solid ${theme.palette.secondary.main}`,
  filter: "drop-shadow(-1px 1px 10px rgba(0, 0, 0, 0.25))",
  position: "absolute",
  zIndex: 2,
} as React.CSSProperties;

const typographyStyle = {
  position: "absolute",
  top: 24,
  right: 72,
  fontWeight: 700,
  zIndex: 3,
} as React.CSSProperties;

const logoStyle = {
  position: "absolute",
  width: "50px",
  height: "50px",
  top: 15,
  right: 15,
  zIndex: 3,
} as React.CSSProperties;

export default function Topbar({ style }: Props): ReactElement {
  return (
    <Box
      sx={{
        ...style,
        ...boxStyle,
      }}
    >
      <div id="leftTriangle" style={leftTriangleStyle}></div>
      <div id="rightTriangle" style={rightTriangleStyle}></div>
      <Typography variant="h5" sx={typographyStyle}>
        Santi | Split
      </Typography>
      <Avatar sx={logoStyle} src={logo} />
    </Box>
  );
}
