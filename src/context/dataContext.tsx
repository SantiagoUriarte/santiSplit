import React, { createContext } from "react";

export interface ItemObject {
  itemName: string;
  itemPrice: number;
  assignedPeople: Set<string>;
}

export interface DataContext {
  peopleList: string[] | [];
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
