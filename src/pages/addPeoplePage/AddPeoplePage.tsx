import { Container, Box, Button } from "@mui/material";
import { ReactElement } from "react";
import DataCard from "../../components/dataCard/DataCard";
import TitleSection from "../../components/titleSection/TitleSection";

interface Props {}

export default function AddPeoplePage({}: Props): ReactElement {
  return (
    <Container
      fixed
      maxWidth="sm"
      sx={{
        width: "90%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          marginTop: "20%",
          marginBottom: "25px",
        }}
      >
        <TitleSection />
      </Box>
      <DataCard
        cardTitle="Add people to split the Bill with"
        variant="people"
      />
    </Container>
  );
}
