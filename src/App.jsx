import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from './components/Title'
import Search from './components/Search'
import Table from './components/Table'
import Form from './components/Form'

function App() {
  // const [count, setCount] = useState(0)
  let tables = [
    {
    id:1,
    expense:"Ugali Matumbo",
    description:"Wednesday's Lunch",
    category:"food",
    amount:"300",
    date:"23-2-2024"
    },

    {
      id:2,
    expense:"KPLC tokens",
    description:"power Tokens",
    category:"electricity",
    amount:"300",
    date:"12-3-2024"
    },

    {
      id:3,
    expense:"Buy shoes",
    description:"Add to my shoe collection",
    category:"shoes",
    amount:"300",
    date:"13-4-2024"
  },


    { id:4,
    expense:"Buy book",
    description:"Add to my book collection",
    category:"book",
    amount:"300",
    date:"23-6-2024"
    },

    {id:5,
    expense:"Pay Loan",
    description:"Bank loan repayment",
    category:"money",
    amount:"300",
    date:"13-4-2025"
    }

 ]
  
   return (
    <>
    <div className='bluecolor'></div>
    <Title />
    <Search/>
    <Form  form = {tables}/>
    
<Table tables = {tables}/>
    </>
  )
}

export default App
