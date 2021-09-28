import React from 'react';
import NewExpenseForm from './NewExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {

    const saveExpenseHandler = (expenseForm) => {
        const expenseData = {
            ...expenseForm,
            id: Math.random().toString(),
        };

        props.onAddExpense(expenseData);
    };

    return (
        <div className="new-expense">
            <NewExpenseForm onSaveExpenseDate={saveExpenseHandler} />
        </div>
    );
};

export default NewExpense;