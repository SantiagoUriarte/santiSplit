import { List, ListItem, Button, IconButton } from "@mui/material";
import { ReactElement, useState, useContext, useRef } from "react";
import { dataContext } from "../../context/dataContext";
import DeleteIcon from "@mui/icons-material/Delete";
import DisplayEntry from "../listEntries/DisplayEntry";
import InputEntry from "../listEntries/InputEntry";

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
  const { itemList, setItemList } = useContext(dataContext);
  const [inputMode, setInputMode] = useState(false);

  // Count how many renders
  const renderCounter = useRef(0);
  renderCounter.current = renderCounter.current + 1;
  console.log("InteractiveList Renders: " + renderCounter.current);

  return (
    <div>
      <List sx={listStyle}>
        {itemList.map((item, index) => {
          if (!item) {
            return;
          }
          return (
            <ListItem disablePadding sx={entryStyle} key={index}>
              <IconButton
                onClick={() => {
                  itemList.splice(index, 1);
                  setItemList([...itemList]);
                }}
              >
                <DeleteIcon sx={deleteButtonStyle} />
              </IconButton>
              <DisplayEntry
                leftData={item.itemName}
                rightData={`\$${item.itemPrice.toFixed(2)}`}
              />
            </ListItem>
          );
        })}
      </List>
      {inputMode == true ? (
        <InputEntry
          variant="billItem"
          stringLabel="Item Name"
          numberLabel="0.00"
          setInputMode={setInputMode}
        />
      ) : (
        <Button onClick={() => setInputMode(true)}>Add Item</Button>
      )}
    </div>
  );
}
