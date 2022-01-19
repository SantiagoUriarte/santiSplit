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

//TODO: Add form validation so item name is not empty
export default function ItemsList({}: Props): ReactElement {
  const { peopleList, itemList, setItemList } = useContext(dataContext);
  const [inputMode, setInputMode] = useState(false);

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
                expandedData={
                  <ChipList itemIndex={index} dataList={peopleList} />
                }
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Button onClick={() => setInputMode(true)}>Add Item</Button>
        </Box>
      )}
    </div>
  );
}
