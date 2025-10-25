import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Dashboard as DashboardIcon,
  AccountBalanceWallet as TransactionsIcon,
  TrendingUp as BudgetIcon,
  Assessment as ReportsIcon,
  Home as HomeIcon,
} from '@mui/icons-material';
import './Layout.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Dashboard', icon: DashboardIcon },
    { path: '/transactions', label: 'Transactions', icon: TransactionsIcon },
    { path: '/budget', label: 'Budget', icon: BudgetIcon },
    { path: '/reports', label: 'Reports', icon: ReportsIcon },
  ];

  return (
    <div className="layout">
      <header className="header">
        <h1>
          <HomeIcon style={{ marginRight: '8px', verticalAlign: 'middle' }} />
          Household Budget
        </h1>
      </header>

      <div className="main-content">
        <nav className="sidebar">
          <ul className="nav-list">
            {navItems.map(item => {
              const IconComponent = item.icon;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  >
                    <span className="nav-icon">
                      <IconComponent />
                    </span>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <main className="content">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
