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
    hideForm();
  };

  const showForm = () => {
    setDisplayForm(true);
  };

  const hideForm = () => {
    setDisplayForm(false);
  };

  if (!displayForm) {
    return (
        <div className="new-expense">
            <button onClick={showForm}>Add Expense</button>
        </div>
    );
  }

  return (
    <div className="new-expense">
      <NewExpenseForm onSaveExpenseDate={saveExpenseHandler} cancelExpenseHandler={hideForm} />
    </div>
  );
};

export default NewExpense;
