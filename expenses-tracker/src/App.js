import { useState } from 'react';

import './App.css';

import Expenses from './components/Expenses/Expenses';

import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const [items, setNewItems] = useState(expenses);

  const addExpenseHandler = function (expense) {
    setExpenses(prevExpenses => [expense, ...prevExpenses]);
    setNewItems(prevItems => [expense, ...prevItems]);
  };

  const deleteExpenseHandler = function (itemId) {
    setNewItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={items} onDeleteExpenses={deleteExpenseHandler} />
    </div>
  );
}

export default App;
