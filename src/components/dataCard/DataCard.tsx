import { Card, Container, CardContent, Typography } from "@mui/material";
import React, { ReactElement } from "react";
import PeopleList from "../interactiveList/PeopleList";
import ItemsList from "../interactiveList/ItemsList";
import FinalAndTaxList from "../interactiveList/FinalAndTaxList";

interface Props {
  variant: "people" | "items" | "finalAndTax";
  cardTitle?: string;
}

export default function DataCard({ variant, cardTitle }: Props): ReactElement {
  return (
    <Card
      sx={{
        width: "95%",
        overflow: "auto",
      }}
      elevation={1}
    >
      <CardContent>
        <Typography>{cardTitle}</Typography>
        {variant == "people" ? <PeopleList /> : ""}
        {variant == "items" ? <ItemsList /> : ""}
        {variant == "finalAndTax" ? <FinalAndTaxList /> : ""}
      </CardContent>
    </Card>
  );
}
