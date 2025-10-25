import React from 'react';
import './Page.css';

const Budget: React.FC = () => {
  return (
    <div className="page">
      <h2>Budget</h2>
      <div className="page-header">
        <button className="btn-primary">Add Budget Category</button>
      </div>

      <div className="budget-categories">
        <div className="budget-category">
          <div className="category-header">
            <h3>Food & Dining</h3>
            <span className="budget-amount">$500.00</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '68%' }}></div>
          </div>
          <div className="category-stats">
            <span>Spent: $340.00</span>
            <span>Remaining: $160.00</span>
          </div>
        </div>

        <div className="budget-category">
          <div className="category-header">
            <h3>Transportation</h3>
            <span className="budget-amount">$300.00</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '45%' }}></div>
          </div>
          <div className="category-stats">
            <span>Spent: $135.00</span>
            <span>Remaining: $165.00</span>
          </div>
        </div>

        <div className="budget-category">
          <div className="category-header">
            <h3>Utilities</h3>
            <span className="budget-amount">$200.00</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '90%' }}></div>
          </div>
          <div className="category-stats">
            <span>Spent: $180.00</span>
            <span>Remaining: $20.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Budget;
