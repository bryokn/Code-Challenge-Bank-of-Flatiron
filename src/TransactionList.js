import React from 'react';
import './TransactionList.css';

function TransactionList({ transactions }) {
  return (
    <div>
        <h2>Transaction List</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id} className="transaction-item">
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount}</td>
              <td>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      </div>
  );
} 

export default TransactionList;