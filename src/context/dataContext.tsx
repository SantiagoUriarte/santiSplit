import React, { createContext } from "react";

interface ItemObject {
  itemName: string;
  itemPrice: number;
  assignedPeople: number[];
}

interface DataContext {
  peopleList: Array<string> | [];
  setPeopleList: React.Dispatch<React.SetStateAction<Array<string>>>;
  itemList: ItemObject[] | [];
  setItemList: React.Dispatch<React.SetStateAction<Array<ItemObject>>>;
}

export const dataContext = createContext<DataContext>({
  peopleList: [],
  setPeopleList: () => {},
  itemList: [],
  setItemList: () => {},
});
