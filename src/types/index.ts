export interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  category: string;
  type: 'income' | 'expense';
}

export interface BudgetCategory {
  id: string;
  name: string;
  budgetAmount: number;
  spentAmount: number;
  color?: string;
}

export interface Budget {
  id: string;
  name: string;
  categories: BudgetCategory[];
  startDate: string;
  endDate: string;
}

export interface DashboardData {
  totalBalance: number;
  monthlyIncome: number;
  monthlyExpenses: number;
  savingsRate: number;
  recentTransactions: Transaction[];
}

export interface ReportData {
  spendingByCategory: { [category: string]: number };
  incomeVsExpenses: {
    income: number;
    expenses: number;
    savings: number;
  };
  budgetPerformance: {
    [categoryId: string]: {
      budgeted: number;
      spent: number;
      percentage: number;
    };
  };
}
