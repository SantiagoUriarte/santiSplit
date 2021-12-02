import React, { ReactElement, useState } from "react";
import { Chip } from "@mui/material";

interface Props {
  data: string;
  handleClick: VoidFunction;
  isSelected: boolean;
}

const chipStyle = {
  marginRight: "5px",
};

export default function ToggableChip({
  data,
  handleClick,
  isSelected = false,
}: Props): ReactElement {
  const [isOn, setIsOn] = useState(isSelected);

  return (
    <Chip
      sx={chipStyle}
      size="small"
      variant={isOn ? "filled" : "outlined"}
      onClick={() => {
        setIsOn(!isOn);
        handleClick();
      }}
      label={data}
    />
  );
}
