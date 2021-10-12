import React, { useState } from "react";

import "./NewExpenseForm.css";

const NewExpenseForm = (props) => {
  const [formTitle, setFormTitle] = useState('');
  const [formAmount, setFormAmount] = useState('');
  const [formDate, setFormDate] = useState('');

  // const [userInput, setUserInput] = useState({
  //   formTitle: '',
  //   formAmount: '',
  //   formDate: ''
  // });

  const titleChangeHandler = (event) => {
    setFormTitle(event.target.value);
    // setUserInput((state) => {
    //   return { ...state, formTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setFormAmount(event.target.value);
    // setUserInput((state) => {
    //   return { ...state, formAmount: event.target.value };
    // });
  };

  const dateChangeHandler = (event) => {
    setFormDate(event.target.value);
    // setUserInput((state) => {
    //   return { ...state, formDate: event.target.value };
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: formTitle,
      amount: formAmount,
      date: new Date(formDate),
    };

    props.onSaveExpenseDate(expenseData);

    setFormTitle('');
    setFormAmount('');
    setFormDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={formTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value={formAmount} onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" value={formDate} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Save</button>
        <button onClick={props.cancelExpenseHandler}>Cancel</button>
      </div>
    </form>
  );
};

export default NewExpenseForm;
