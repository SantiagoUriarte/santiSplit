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

//TODO: Add form validation so person name is not empty
export default function PeopleList({}: Props): ReactElement {
  const { peopleList, itemList, setItemList, setPeopleList } =
    useContext(dataContext);
  const [inputMode, setInputMode] = useState(false);

  return (
    <div>
      <List sx={listStyle}>
        {peopleList.map((person, index) => {
          if (!person) {
            return;
          }
          return (
            <ListItem disablePadding sx={entryStyle} key={index}>
              <IconButton
                onClick={() => {
                  let newPeopleList = [...peopleList];
                  let newItemList = [...itemList];

                  newPeopleList.splice(index, 1);
                  newItemList.forEach((itemObject) => {
                    itemObject.assignedPeople.delete(person);
                  });

                  setPeopleList(newPeopleList);
                  setItemList(newItemList);
                }}
              >
                <DeleteIcon sx={deleteButtonStyle} />
              </IconButton>
              <DisplayEntry leftData={person} />
            </ListItem>
          );
        })}
      </List>
      {inputMode == true ? (
        <InputEntry
          variant="person"
          stringLabel="Enter a name"
          setInputMode={setInputMode}
        />
      ) : (
        <Button onClick={() => setInputMode(true)}>Add People</Button>
      )}
    </div>
  );
}
