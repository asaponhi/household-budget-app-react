import React from 'react';
import './Page.css';

const Transactions: React.FC = () => {
  return (
    <div className="page">
      <h2>Transactions</h2>
      <div className="page-header">
        <button className="btn-primary">Add Transaction</button>
      </div>

      <div className="transactions-table">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2024-01-15</td>
              <td>Grocery Shopping</td>
              <td>Food</td>
              <td className="expense">-$85.50</td>
              <td>
                <button className="btn-small">Edit</button>
                <button className="btn-small btn-danger">Delete</button>
              </td>
            </tr>
            <tr>
              <td>2024-01-14</td>
              <td>Salary</td>
              <td>Income</td>
              <td className="income">+$2,100.00</td>
              <td>
                <button className="btn-small">Edit</button>
                <button className="btn-small btn-danger">Delete</button>
              </td>
            </tr>
            <tr>
              <td>2024-01-13</td>
              <td>Electric Bill</td>
              <td>Utilities</td>
              <td className="expense">-$120.00</td>
              <td>
                <button className="btn-small">Edit</button>
                <button className="btn-small btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;
