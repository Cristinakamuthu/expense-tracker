import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from './components/Title'
import Search from './components/Search'
import Table from './components/Table'

function App() {
  // const [count, setCount] = useState(0)
  let tables = [
    {
    id:1,
    expense:"Ugali Matumbo",
    description:"Wednesday's Lunch"
    },

    {
      id:2,
    expense:"KPLC tokens",
    description:"power Tokens"
    },

    {
      id:3,
    expense:"Buy shoes",
    description:"Add to my shoe collection"
  },


    { id:4,
    expense:"Buy book",
    description:"Add to my book collection"
    },

    {id:5,
    expense:"Pay Loan",
    description:"Bank loan repayment"
    }

 ]
  
   return (
    <>
    <div className='bluecolor'></div>
    <Title />
    <Search/>
    <Table tables = {tables}/>
    </>
  )
}

export default App
