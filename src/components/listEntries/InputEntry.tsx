import React, { ReactElement, useState, useContext } from "react";
import {
  Box,
  IconButton,
  TextField,
  InputAdornment,
  FormLabel,
  Input,
  Typography,
  OutlinedInput,
  InputLabel,
  FormControl,
  Paper,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/DeleteOutline";
import { dataContext } from "../../context/dataContext";

//TODO: Add check to not allow empty items or people
//TODO: Maybe allow ability to edit line
interface Props {
  style?: React.CSSProperties;
  variant: "person" | "billItem" | "subtotal" | "tipPercentage" | string;
  inputLabel?: string;
  unmountFunction?: Function;
  setInputMode?: React.Dispatch<React.SetStateAction<boolean>>; // Pass in input mode function so parent can show/hide inputEntry
}

const paperStyle = {
  display: "flex",
  alignContent: "center",
  width: "100%",
};

const formControlStyle = {
  width: "100%",
};

const stringInputStyle = {
  minWidth: "100px",
  width: "100%",
  paddingLeft: "12px",
};

const moneyInputStyle = {
  margin: "16px 0 0 20px",
};

const checkButtonStyle = {
  margin: "0 10px 0 0",
  color: "green",
};

const deleteButtonStyle = {};

export default function InputEntry({
  style,
  variant,
  inputLabel,
  unmountFunction,
}: Props): ReactElement {
  const { peopleList, setPeopleList, itemList, setItemList } =
    useContext(dataContext);
  const [stringInput, setStringInput] = useState("");
  const [moneyInput, setMoneyInput] = useState((0).toFixed(2));
  const [integerInput, setIntegerInput] = useState(0);

  let showStringInput = false;
  let showMoneyInput = false;
  let showDeleteIcon = false;
  let showIntegerInput = false;

  switch (variant) {
    case "person":
      showStringInput = true;
      showDeleteIcon = true;
      break;
    case "billItem":
      showStringInput = true;
      showMoneyInput = true;
      showDeleteIcon = true;
      break;
    case "subtotal":
      showMoneyInput = true;
    case "tipPercentage":
      showIntegerInput = true;
    default:
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
            itemPrice: parseFloat(moneyInput),
            assignedPeople: new Set(),
          },
        ]);
        break;
    }
    unmountFunction?.();
  };

  return (
    <Paper
      sx={{
        ...style,
        ...paperStyle,
      }}
      elevation={3}
    >
      {showStringInput ? (
        <FormControl sx={formControlStyle}>
          <InputLabel htmlFor="stringInput">{inputLabel}</InputLabel>
          <Input
            autoComplete="off"
            autoFocus
            id="stringInput"
            type="text"
            value={stringInput}
            onChange={(e) => {
              setStringInput(e.target.value);
            }}
            sx={stringInputStyle}
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                handleInputSubmit();
              }
            }}
          />
        </FormControl>
      ) : (
        ""
      )}
      {showMoneyInput ? (
        <FormControl>
          <Input
            id="moneyInput"
            sx={moneyInputStyle}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            type="number"
            value={moneyInput}
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                handleInputSubmit();
              }
            }}
            onChange={(e) => {
              setMoneyInput(e.target.value);
            }}
            inputProps={{ min: 0, step: 0.01 }}
          />
        </FormControl>
      ) : (
        ""
      )}
      <IconButton
        aria-label="confirm string input"
        onClick={() => {
          handleInputSubmit();
        }}
        edge="end"
      >
        <CheckIcon sx={checkButtonStyle} />
      </IconButton>
    </Paper>
  );

  // return (
  //   <Box sx={{ display: "flex", alignContent: "center" }}>
  //     {showDeleteIcon ? (
  //       <IconButton onClick={handleInputCancel}>
  //         <DeleteIcon sx={deleteButtonStyle} />
  //       </IconButton>
  //     ) : (
  //       ""
  //     )}
  //     {/* <Typography
  //       sx={{
  //         display: "flex",
  //         alignContent: "center",
  //         justifyContent: "center",
  //       }}
  //     >
  //       Test Label
  //     </Typography> */}
  //     {showStringInput ? (
  //       <Input
  //         id="stringInput"
  //         size="small"
  //         placeholder={stringLabel}
  //         sx={stringInputStyle}
  //         value={stringInput}
  //         onChange={(e) => setStringInput(e.target.value)}
  //         onKeyDown={(e) => {
  //           if (e.key == "Enter") {
  //             handleInputSubmit();
  //           }
  //         }}
  //       />
  //     ) : (
  //       ""
  //     )}
  //     {showMoneyInput ? (
  //       <Input

  //       />
  //     ) : (
  //       ""
  //     )}
  //     <IconButton onClick={handleInputSubmit}>
  //       <CheckIcon sx={checkButtonStyle} />
  //     </IconButton>
  //   </Box>
  // );
}
