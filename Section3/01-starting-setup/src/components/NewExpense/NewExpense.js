import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import './NewExpense.css';

const NewExpense = (props) => {

    const [showForm, setShowForm] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        props.onAddNewExpenseData(expenseData);
    }

    const onAddNewExpenseHandler = () => {
        setShowForm(prevState => !prevState);
        //console.log(hasAddNewExpense);
    }

    let newExpenseContent = <ExpenseForm 
                                showFormValue={showForm}
                                onShowForm={onAddNewExpenseHandler}
                                onSaveExpenseData={saveExpenseDataHandler} />;
    if(!showForm)
    {
        newExpenseContent = <button onClick={onAddNewExpenseHandler}>Add new expense</button>;
    }

    return (
        <div className="new-expense">
            {newExpenseContent}            
        </div>
    )
}

export default NewExpense;