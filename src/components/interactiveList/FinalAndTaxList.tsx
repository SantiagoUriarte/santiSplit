import { List, ListItem, Button, IconButton, Box } from "@mui/material";
import { ReactElement, useState, useContext, useRef } from "react";
import { dataContext } from "../../context/dataContext";
import DeleteIcon from "@mui/icons-material/Delete";
import DisplayEntry from "../listEntries/DisplayEntry";
import InputEntry from "../listEntries/InputEntry";
import ChipList from "../chipList/ChipList";

interface Props {}

const deleteButtonStyle = {
  color: "red",
};

const listStyle = {
  minHeight: "30px",
};

const entryStyle = {
  marginBottom: "5px",
};

//TODO: Add ability to set / unset who is paying for each item
//TODO: Add form validation so item name is not empty
export default function ItemsList({}: Props): ReactElement {
  const { peopleList, itemList, setItemList } = useContext(dataContext);
  const [inputMode, setInputMode] = useState(false);

  const splitBillButtonStyle = {
    color: "white",
  };

  return (
    <div>
      <List sx={listStyle}>
        <InputEntry variant="subtotal" stringLabel="Subtotal" />
        <InputEntry
          variant="tipPercentage"
          stringLabel="Desired tip percentage"
        />
      </List>
      <Button sx={splitBillButtonStyle} variant="contained" size="large">
        Split Bill
      </Button>
    </div>
  );
}
