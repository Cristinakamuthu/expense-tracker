import { useState } from 'react'
import './App.css'
import Title from './components/Title'
import Search from './components/Search'
import Table from './components/Table'
import Form from './components/Form'

function App() {
  const [tables, setTables] = useState([
    {
      id: 1,
      expense: "Ugali Matumbo",
      description: "Wednesday's Lunch",
      category: "food",
      amount: "300",
      date: "23-2-2024"
    },
    {
      id: 2,
      expense: "KPLC tokens",
      description: "power Tokens",
      category: "electricity",
      amount: "300",
      date: "12-3-2024"
    },
    {
      id: 3,
      expense: "Buy shoes",
      description: "Add to my shoe collection",
      category: "shoes",
      amount: "300",
      date: "13-4-2024"
    },
    {
      id: 4,
      expense: "Buy book",
      description: "Add to my book collection",
      category: "book",
      amount: "300",
      date: "23-6-2024"
    },
    {
      id: 5,
      expense: "Pay Loan",
      description: "Bank loan repayment",
      category: "money",
      amount: "300",
      date: "13-4-2025"
    }
  ]);

  const [expenses, setExpenses] = useState(Initialexpenses);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredExpenses = expenses.filter(exp =>
    exp.expense.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };
  
  const submited = (newExpense) => {
    const updatedExpense = { ...newExpense
    }
    setTables([...tables, updatedExpense])
  }

  return (
    <>
      <div className='bluecolor'></div>
      <Title />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <Form onAddExpense={submited} />
      <Table tables={tables} />
    </>
  )
}

export default App
