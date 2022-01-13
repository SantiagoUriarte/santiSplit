import { Box, ListItem, Chip } from "@mui/material";
import React, { ReactElement, useContext } from "react";
import { dataContext } from "../../context/dataContext";
import ToggableChip from "../toggableChip/ToggableChip";
import { calculateTotals } from "../../utils/billCalculations";

interface Props {
  dataList: Array<string> | [];
  itemIndex: number;
}

const chipListStyle = {
  width: "100%",
  display: "flex",
  justifyContent: "flex-start",
};

export default function ChipList({ itemIndex, dataList }: Props): ReactElement {
  const { peopleList, itemList, setItemList } = useContext(dataContext);
  // console.log(itemList);
  console.log("\ntotals")
  console.log(calculateTotals(peopleList, itemList))
  return (
    <Box sx={chipListStyle}>
      {peopleList.map((personName, peopleIndex) => {
        return (
          <ToggableChip
            key={peopleIndex}
            handleClick={() => {
              let newList = [...itemList];
              if (newList[itemIndex].assignedPeople.has(personName)) {
                newList[itemIndex].assignedPeople.delete(personName);
              } else {
                newList[itemIndex].assignedPeople.add(personName);
              }
              setItemList(newList);
            }}
            isSelected={
              itemList[itemIndex].assignedPeople.has(personName) ? true : false
            }
            data={personName}
          />
        );
      })}
    </Box>
  );
}
