import React from 'react'

const Table = ({ tables }) => {
  const newTable = () => {
    return (
      <div id='expenses'>
        <table className="expenseTable">
          <thead>
            <tr>
              <th>Expense</th>
              <th>Description</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {tables.map((table) => (
              <tr key={table.id}>
                <td>{table.expense}</td>
                <td>{table.description}</td>
                <td>{table.category}</td>
                <td>{table.amount}</td>
                <td>{table.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  return (
    <div id='table1'>
      {newTable()}
    </div>
  )
}

export default Table
