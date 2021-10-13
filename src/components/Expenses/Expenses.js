import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";

import "./Expenses.css";

const Expenses = (props) => {
  const [filterDate, setFilterDate] = useState("2020");
  const items = props.items.filter(
    (i) => i.date.getFullYear().toString() === filterDate
  );

  const filterChangeHandler = (date) => {
    setFilterDate(date);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          defaultValue={filterDate}
          onChange={filterChangeHandler}
        />
        <ExpensesChart expenses={items} />
        <ExpensesList items={items} />
      </Card>
    </div>
  );
};

export default Expenses;
