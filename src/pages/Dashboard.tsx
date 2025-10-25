import React from 'react';
import './Page.css';

const Dashboard: React.FC = () => {
  return (
    <div className="page">
      <h2>Dashboard</h2>
      <div className="dashboard-grid">
        <div className="card">
          <h3>Total Balance</h3>
          <p className="amount">$2,450.00</p>
        </div>
        <div className="card">
          <h3>Monthly Income</h3>
          <p className="amount income">$4,200.00</p>
        </div>
        <div className="card">
          <h3>Monthly Expenses</h3>
          <p className="amount expense">$1,750.00</p>
        </div>
        <div className="card">
          <h3>Savings Rate</h3>
          <p className="amount">58.3%</p>
        </div>
      </div>

      <div className="recent-transactions">
        <h3>Recent Transactions</h3>
        <div className="transaction-list">
          <div className="transaction-item">
            <span className="description">Grocery Shopping</span>
            <span className="amount expense">-$85.50</span>
          </div>
          <div className="transaction-item">
            <span className="description">Salary</span>
            <span className="amount income">+$2,100.00</span>
          </div>
          <div className="transaction-item">
            <span className="description">Electric Bill</span>
            <span className="amount expense">-$120.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
