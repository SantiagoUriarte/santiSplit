import React, { ReactElement, useState, useContext } from "react";
import {
  Box,
  IconButton,
  TextField,
  InputAdornment,
  Input,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import { dataContext } from "../../context/dataContext";

interface Props {
  variant: "person" | "billItem";
  stringLabel?: string;
  numberLabel?: string;
  setInputMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const stringInputStyle = {
  minWidth: "100px",
  width: "100%",
};

const numberInputStyle = {
  marginLeft: "5px",
  minWidth: "100px",
};

const checkButtonStyle = {
  color: "green",
};

const deleteButtonStyle = {
  color: "red",
};

export default function InputEntry({
  variant,
  stringLabel,
  setInputMode,
  numberLabel,
}: Props): ReactElement {
  const { peopleList, setPeopleList, itemList, setItemList } =
    useContext(dataContext);
  const [stringInput, setStringInput] = useState("");
  const [numberInput, setNumberInput] = useState((0).toFixed(2));
  let showStringInput = false;
  let showNumberInput = false;

  switch (variant) {
    case "person":
      showStringInput = true;
      break;
    case "billItem":
      showStringInput = true;
      showNumberInput = true;
      break;
  }

  const handleInputSubmit = () => {
    switch (variant) {
      case "person":
        setPeopleList([...peopleList, stringInput]);
        break;
      case "billItem":
        setItemList([
          ...itemList,
          {
            itemName: stringInput,
            itemPrice: parseFloat(numberInput),
            assignedPeople: [],
          },
        ]);
        break;
    }
    setInputMode(false);
  };

  const handleInputCancel = () => {
    setInputMode(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <IconButton onClick={handleInputCancel}>
        <DeleteIcon sx={deleteButtonStyle} />
      </IconButton>
      {showStringInput ? (
        <Input
          id="stringInput"
          size="small"
          placeholder={stringLabel}
          sx={stringInputStyle}
          value={stringInput}
          onChange={(e) => setStringInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key == "Enter") {
              handleInputSubmit();
            }
          }}
        />
      ) : (
        ""
      )}
      {showNumberInput ? (
        <Input
          id="numberInput"
          size="small"
          sx={numberInputStyle}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          placeholder={numberLabel}
          type="number"
          value={numberInput}
          onChange={(e) => {
            setNumberInput(e.target.value);
          }}
          inputProps={{ min: 0, step: 0.01 }}
          onKeyDown={(e) => {
            if (e.key == "Enter") {
              handleInputSubmit();
            }
          }}
        />
      ) : (
        ""
      )}
      <IconButton onClick={handleInputSubmit}>
        <CheckIcon sx={checkButtonStyle} />
      </IconButton>
    </Box>
  );
}
