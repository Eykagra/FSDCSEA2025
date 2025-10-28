import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Icard from './components/Icard.jsx'

function App() {
  const student = [{
    name:"Ansh",
    age:19,
    branch:"CSE",
    college:"ABES Engineering College",
    location:"Ghaziabad"
  },
  {
    name:"Ram",
    age:20,
    branch:"CSE",
    college:"ABES Engineering College",
    location:"Ghaziabad"
  },
  {
    name:"Shyam",
    age:21,
    branch:"CSE",
    college:"ABES Engineering College",
    location:"Ghaziabad"
  }
  ]

  return (
    <div>
      <h1>Student Details</h1>
      <Icard data={student} />
    </div>
  )
}

export default App
