import React, { useState } from 'react';

import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";


const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    let newCount = count + 1;
    setCount(newCount);
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <h1>{count}</h1>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={handleClick}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
