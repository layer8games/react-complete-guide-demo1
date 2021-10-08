import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [filterDate, setFilterDate] = useState("2020");
  const items = props.items.filter(
    (i) => i.date.getFullYear().toString() === filterDate
  );

  const filterChangeHandler = (date) => {
    setFilterDate(date);
  };

  let expensesContent = <p>No Expenses for selected year</p>;

  if (items.length > 0) {
    expensesContent = items.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          defaultValue={filterDate}
          onChange={filterChangeHandler}
        />
        {/**

Method 1: Ternary

        {items.length === 0 ? (
          <p>No Expenses for selected year</p>
        ) : (
          items.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )}
Method 2: Binary AND
        {items.length === 0 && <p>No Expenses for selected year</p>}
        {items.length > 0 &&
          items.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
*/}
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
