import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Input,
  Typography,
  Paper,
  Button,
  TextField,
} from "@mui/material";
import Delete from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import { ReactElement, useState, useRef } from "react";

interface Props {}

interface PeopleData {
  data: ReactElement | undefined | null;
}

const deleteButtonStyle = {
  color: "red",
};

//TODO refactor into multiple components
export default function InteractiveList({}: Props): ReactElement {
  //TODO store this in React Context
  const [peopleDataList, setPeopleDataList] = useState<Array<PeopleData>>([
    {data: <Typography>Example Person</Typography>}
  ]);

  const newNameInputRef = useRef<HTMLInputElement>();

  const addNewData = (newData: ReactElement) => {
    setPeopleDataList([...peopleDataList, { data: newData }])
  }

  return (
    <div>
      <List>
        {peopleDataList.map((person, index) => {
          if (!person) {
            return;
          }
          return (
            <ListItem
              key={index}
              disablePadding
              sx={{
                marginBottom: "5px",
              }}
            >
              <IconButton
                onClick={() => {
                  console.log("deleting at index: ", index);
                  const newData = [...peopleDataList];
                  newData.splice(index, 1);
                  setPeopleDataList(newData);
                }}
              >
                <Delete sx={{ ...deleteButtonStyle }} />
              </IconButton>
              <Paper
                elevation={1}
                sx={{
                  padding: "15px 10px",
                  width: "100%",
                }}
              >
                {person.data}
              </Paper>
            </ListItem>
          );
        })}
        <ListItem
          key={peopleDataList.length}
          disablePadding
          sx={{
            marginBottom: "5px",
          }}
        >
          <Button
            onClick={() => {
              console.log("Adding person");
              
              setPeopleDataList([
                ...peopleDataList,
                {
                  data: (
                    <Box sx={{ display: "flex" }}>
                      <Input
                        inputRef={newNameInputRef}
                        id="nameEntryInput"
                        autoFocus
                        placeholder="Enter a name"
                        sx={{
                          width: "100%",
                        }}
                        onKeyDown={(e) => {
                          if(e.key == 'Enter') {
                            addNewData(<Typography>{newNameInputRef?.current?.value}</Typography>)
                          }
                        }}
                      />
                      <IconButton
                        onClick={(e) => {
                          //TODO make this a controlled input
                          addNewData(<Typography>{newNameInputRef?.current?.value}</Typography>)
                          console.log("Confirmed");
                        }}
                      >
                        <CheckIcon sx={{ ...deleteButtonStyle }} />
                      </IconButton>
                    </Box>
                  ),
                },
              ]);
            }}
          >
            Add a person
          </Button>
        </ListItem>
      </List>
    </div>
  );
}
