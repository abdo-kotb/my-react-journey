import { useState } from 'react';

import './Expenses.css';

import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';

const Expenses = function (props) {
  const [filteredYear, setFitleredYear] = useState('2020');

  const filterChangeHandler = selectedYear => setFitleredYear(selectedYear);

  const filteredExpenses = props.items.filter(
    expense => `${expense.date.getFullYear()}` === filteredYear
  );

  const deleteItemHandler = itemId => props.onDeleteExpenses(itemId);

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList
        items={filteredExpenses}
        onDeleteItems={deleteItemHandler}
      />
    </Card>
  );
};

export default Expenses;
