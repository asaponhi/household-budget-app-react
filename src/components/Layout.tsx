import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Layout.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Dashboard', icon: '📊' },
    { path: '/transactions', label: 'Transactions', icon: '💰' },
    { path: '/budget', label: 'Budget', icon: '📈' },
    { path: '/reports', label: 'Reports', icon: '📋' },
  ];

  return (
    <div className="layout">
      <header className="header">
        <h1>🏠 Household Budget</h1>
      </header>

      <div className="main-content">
        <nav className="sidebar">
          <ul className="nav-list">
            {navItems.map(item => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                >
                  <span className="nav-icon">{item.icon}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <main className="content">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
