import React, { useState } from "react";
import NewExpenseForm from "./NewExpenseForm";

import "./NewExpenses.css";

const NewExpense = (props) => {
  const [displayForm, setDisplayForm] = useState(false);

  const saveExpenseHandler = (expenseForm) => {
    const expenseData = {
      ...expenseForm,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  const addExpenseHandler = () => {
    setDisplayForm(true);
  };

  const cancelExpenseHandler = () => {
    setDisplayForm(false);
  };

  if (!displayForm) {
    return (
        <div className="new-expense">
            <button onClick={addExpenseHandler}>Add Expense</button>
        </div>
    );
  }

  return (
    <div className="new-expense">
      <NewExpenseForm onSaveExpenseDate={saveExpenseHandler} cancelExpenseHandler={cancelExpenseHandler} />
    </div>
  );
};

export default NewExpense;
