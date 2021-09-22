import React from 'react';

import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./css/ExpenseItem.css";

const handleClick = () => {
  console.log("clicked");
};

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={handleClick}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
