import React, {useState} from 'react'
import App from '../App';

const Form = (form) => {
   const [expense, setExpense] = useState("");
   const [description, setDescription] = useState("");
   const [category, setCategory] = useState("");
   const [amount, setAmount] = useState("");
   const [date, setDate] = useState("");
   
   const whenSubmit = (e) => {
      e.preventDefault();

      if (!(expense && description && category && amount && date)) return;

      const newExpense = { expense, description, category, amount, date };
      form.onAddExpense(newExpense); 
      setExpense("");
      setDescription("");
      setCategory("");
      setAmount("");
      setDate("");
   };

   return (
      <div id='form-container'> 
         <h1>Add Expense</h1>
         <p>Enter your expense details below</p>
         <form id='form' onSubmit={whenSubmit}>
            <input type="text" placeholder='Enter expense ' value={expense} onChange={(e) => setExpense(e.target.value)} />
            <input type="text" placeholder='Enter expense description' value={description} onChange={(e) => setDescription(e.target.value)} />
            <input type="text" placeholder='Enter category' value={category} onChange={(e) => setCategory(e.target.value)} />
            <input type="text" placeholder='Enter amount' value={amount} onChange={(e) => setAmount(e.target.value)} />
            <input type="date" placeholder='mm/dd/yyyy' value={date} onChange={(e) => setDate(e.target.value)} /> 
            <button type='submit'>Submit</button>
         </form>
      </div>
   );
};

export default Form;
