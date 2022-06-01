import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import FormModal from "../UI/FormModal";

import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const changeTitleHandler = () => {
    setTitle("Chad");
    setIsFormOpen(true);
  };

  console.log(isFormOpen);

  return (
    <>
      {isFormOpen && <FormModal />}
      <li>
        <Card className="expense-item">
          <ExpenseDate date={props.date} />
          <div className="expense-item__description">
            <h2>{title}</h2>
            <div className="expense-item__price">${props.amount}</div>
          </div>
          <button onClick={changeTitleHandler}>Change Title</button>
        </Card>
      </li>
    </>
  );
};

export default ExpenseItem;
