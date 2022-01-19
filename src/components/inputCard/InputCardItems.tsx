import React, { ReactElement, useContext, useState } from "react";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { dataContext } from "../../context/dataContext";
import DisplayEntry from "../listEntries/DisplayEntry";
import InputEntry from "../listEntries/InputEntry";
import DeleteIcon from "@mui/icons-material/DeleteOutline";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import ChipList from "../chipList/ChipList";

interface Props {
  style?: React.CSSProperties;
  instructionsLabel?: string;
  listAddLabel?: string;
  buttonLabel?: string;
}

const boxStyle = {
  display: "flex",
  flexDirection: "column",
  position: "relative",
  alignItems: "center",
  width: "100%",
  height: "60%",
  minWidth: "200px",
} as React.CSSProperties;

const instructionsLabelStyle = {
  marginTop: "40px",
  marginBottom: "40px",
  fontWeight: 700,
} as React.CSSProperties;

const listStyle = {
  width: "100%",
} as React.CSSProperties;

const listItemStyle = {
  marginTop: "-5px",
} as React.CSSProperties;

const listItemContentStyle = {
  display: "flex",
  width: "100%",
};

const deleteButtonStyle = {};

const listAddLabelStyle = {
  position: "absolute",
  left: "8px",
} as React.CSSProperties;

const buttonStyle = {
  marginTop: "80px",
  borderRadius: "25px",
  padding: "5px 35px 5px 35px",
  fontSize: "12px",
} as React.CSSProperties;

//TODO: Add logic
export default function InputCarItems({
  style,
  instructionsLabel,
  listAddLabel,
  buttonLabel,
}: Props): ReactElement {
  const { peopleList, itemList, setItemList, setPeopleList } =
    useContext(dataContext);
  const [inputMode, setInputMode] = useState(false);

  return (
    <Box
      sx={{
        ...style,
        ...boxStyle,
      }}
    >
      <Typography variant="h5" sx={instructionsLabelStyle}>
        {instructionsLabel}
      </Typography>
      <List sx={listStyle}>
        {itemList.map((item, index) => {
          return (
            <ListItem key={index} sx={listItemStyle}>
              <Box sx={listItemContentStyle}>
                <DisplayEntry
                  leftData={item.itemName}
                  rightData={`\$${item.itemPrice.toFixed(2)}`}
                  expandedData={
                    <ChipList itemIndex={index} dataList={peopleList} />
                  }
                />
                <IconButton
                  onClick={() => {
                    itemList.splice(index, 1);
                    setItemList([...itemList]);
                  }}
                >
                  <DeleteIcon color="primary" sx={deleteButtonStyle} />
                </IconButton>
              </Box>
            </ListItem>
          );
        })}
        {inputMode ? (
          <ListItem>
            <Box sx={listItemContentStyle}>
              <InputEntry
                variant="billItem"
                inputLabel="Enter item name and price"
                unmountFunction={() => {
                  setInputMode(false);
                }}
              />
              <IconButton
                onClick={() => {
                  setInputMode(false);
                }}
              >
                <DeleteIcon color="primary" sx={deleteButtonStyle} />
              </IconButton>
            </Box>
          </ListItem>
        ) : (
          ""
        )}
        {listAddLabel ? (
          <Button
            disabled={inputMode ? true : false}
            color="secondary"
            sx={listAddLabelStyle}
            onClick={() => {
              setInputMode(true);
            }}
          >
            {listAddLabel}
          </Button>
        ) : (
          ""
        )}
      </List>

      <Button color="secondary" sx={buttonStyle} variant="contained">
        {buttonLabel}
      </Button>
    </Box>
  );
}
