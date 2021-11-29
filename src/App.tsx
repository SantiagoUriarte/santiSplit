import React, { ReactElement, useState, createContext } from 'react'
import Button from '@mui/material/Button' 
import AddPeoplePage from './pages/addPeoplePage/AddPeoplePage'
import { Container } from '@mui/material'
import AddItemsPage from './pages/addItemsPage/AddItemsPage'
import { dataContext } from './context/dataContext'


export default function App(): ReactElement {
  const [peopleList, setPeopleList] = useState([
    "Santiago", "Tiffany", "Bryant"
  ])
  const [itemList, setItemList] = useState([{
    itemName: "ExampleItem",
    itemPrice: 4.56,
    assignedPeople: [0, 2]
  }])

  const data = {
    peopleList,
    setPeopleList,
    itemList,
    setItemList
  }

  return (
    <dataContext.Provider value={data}>
    <div className="app">
        <AddPeoplePage />
        <AddItemsPage />
    </div>
    </dataContext.Provider>
  )
}
