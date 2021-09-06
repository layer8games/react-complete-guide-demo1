import './ExpenseItem.css';

const ExpenseItem = () => {
  const expenseDate = new Date(2021, 8, 6);
  const expenseTitle = "Mortgage";
  const expenseAmount = 1403.53;

    return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
