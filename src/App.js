import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_DATA = [
  { id: 'e1', title: "Food", amount: 16.23, date: new Date(2020, 9, 21) },
  { id: 'e2', title: "Bills", amount: 35.45, date: new Date(2020, 9, 10) },
  { id: 'e3', title: "New Game", amount: 59.99, date: new Date(2021, 9, 16) },
  { id: 'e4', title: "Rent", amount: 403.87, date: new Date(2022, 9, 1) },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_DATA);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
