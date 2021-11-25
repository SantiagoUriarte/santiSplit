import React, { ReactElement } from 'react'
import Button from '@mui/material/Button' 
import AddPeoplePage from './pages/addPeoplePage/AddPeoplePage'
import { Container } from '@mui/material'

export default function App(): ReactElement {
  return (
    <div className="app">
        <AddPeoplePage />
    </div>
  )
}
