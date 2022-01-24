import './ExpensesList.css';

import ExpenseItem from './ExpenseItem';

const ExpensesList = function (props) {
  const deleteListItemHandler = itemId => props.onDeleteItems(itemId);

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map(expense => (
        <ExpenseItem
          onDeleteClicked={deleteListItemHandler}
          key={expense.id}
          id={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;