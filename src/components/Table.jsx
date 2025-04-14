import React from 'react'
import App from '../App'

const Table = ({ tables }) => {
  const newTable = () => {
    return (
        <div id='expenses'>
      <table className="expenseTable">
        <thead>
          <tr>
            <th>Expense</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {tables.map((table) => (
            <tr key={table.id}>
              <td>{table.expense}</td>
              <td>{table.description}</td>
            </tr>
          )
          )
          }
        </tbody>
      </table>
      </div>
    )
  }

  return <div>
    {newTable()}
  </div>
}

export default Table;





