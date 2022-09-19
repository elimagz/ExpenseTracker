import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import "./NewExpense.css";

export default function NewExpense(props) {
    const [showForm, setShowForm] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onNewExpense(expenseData);
        stopEditingHandler();
    }
    const startEditingHandler = () => {
        setShowForm(true);
    }
    const stopEditingHandler = () => {
        setShowForm(false);
    }
  return (
    <div className="new-expense">
        {!showForm && <button onClick={startEditingHandler}>Add new Expense</button>}
        {showForm && <ExpenseForm onCancel={stopEditingHandler} onSaveExpenseData={saveExpenseDataHandler}/>}
    </div>
  )
}
