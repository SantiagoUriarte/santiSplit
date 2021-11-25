import { Card, Container, CardContent, Typography } from "@mui/material";
import React, { ReactElement } from "react";
import InteractiveList from "../interactiveList/InteractiveList";

interface Props {
  cardTitle?: string
}



export default function DataCard({cardTitle}: Props): ReactElement {
  return (
    <Card sx={{
        width: '95%',
        overflow: 'auto',
    }} elevation={1}>
      <CardContent>
        <Typography>{cardTitle}</Typography>
        <InteractiveList />
      </CardContent>
    </Card>
  );
}
