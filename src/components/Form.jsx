import React from 'react'

const Form = () => {
  return (
    <div id='form'>
    <h1>Add Expense</h1>
    <p>Enter your expense details below</p>
        <form id='form'>
        <input type="text" placeholder='Enter expense description' />
        <input type="text" placeholder='Enter expense Category' />
        <input type="text" placeholder='Enter amount' />
        <input type="text" placeholder='mm/dd/yyyy' />
        <button id='btn'>Submit</button>
        

        </form>
    </div>
  )
}

export default Form