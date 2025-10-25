# Household Budget App

A modern React TypeScript application for managing household finances, built with Vite for fast development and hot reloading.

## Features

- 📊 **Dashboard**: Overview of your financial status with key metrics
- 💰 **Transactions**: Add, edit, and manage your income and expenses
- 📈 **Budget**: Set up budget categories and track spending
- 📋 **Reports**: Visualize your financial data with charts and insights

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **React Router** for navigation
- **CSS3** for styling with responsive design

## Getting Started

### Prerequisites

- Node.js 16.11.0 or higher
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd household-budget-app-react
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the app for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint to check for code issues

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Layout.tsx     # Main layout with navigation
│   └── Layout.css       # Layout styles
├── pages/              # Page components
│   ├── Dashboard.tsx   # Dashboard page
│   ├── Transactions.tsx # Transactions page
│   ├── Budget.tsx      # Budget page
│   ├── Reports.tsx     # Reports page
│   └── Page.css        # Page styles
├── types/              # TypeScript type definitions
│   └── index.ts        # Main type definitions
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── styles/             # Global styles
├── App.tsx             # Main app component
├── main.tsx            # App entry point
└── index.css           # Global CSS
```

## Features Overview

### Dashboard

- Total balance display
- Monthly income and expenses
- Savings rate calculation
- Recent transactions list

### Transactions

- Transaction list with filtering
- Add new transactions
- Edit and delete existing transactions
- Category-based organization

### Budget

- Budget categories with spending limits
- Visual progress bars
- Spending vs. budget tracking
- Category performance indicators

### Reports

- Spending by category charts
- Income vs. expenses comparison
- Budget performance analysis
- Financial insights

## Development

The app is built with modern React patterns:

- Functional components with hooks
- TypeScript for type safety
- CSS modules for component styling
- Responsive design for mobile and desktop

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the MIT License.
