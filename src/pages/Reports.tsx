import React from 'react';
import './Page.css';

const Reports: React.FC = () => {
  return (
    <div className="page">
      <h2>Reports</h2>

      <div className="reports-grid">
        <div className="report-card">
          <h3>Monthly Spending by Category</h3>
          <div className="chart-placeholder">
            <p>📊 Chart visualization would go here</p>
            <p>Food: $340 (34%)</p>
            <p>Transportation: $135 (13.5%)</p>
            <p>Utilities: $180 (18%)</p>
            <p>Other: $345 (34.5%)</p>
          </div>
        </div>

        <div className="report-card">
          <h3>Income vs Expenses</h3>
          <div className="chart-placeholder">
            <p>📈 Income vs Expenses chart</p>
            <p>Income: $4,200</p>
            <p>Expenses: $1,750</p>
            <p>Savings: $2,450</p>
          </div>
        </div>

        <div className="report-card">
          <h3>Budget Performance</h3>
          <div className="budget-performance">
            <div className="performance-item good">
              <span>Transportation</span>
              <span>55% used</span>
            </div>
            <div className="performance-item warning">
              <span>Food</span>
              <span>68% used</span>
            </div>
            <div className="performance-item danger">
              <span>Utilities</span>
              <span>90% used</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
