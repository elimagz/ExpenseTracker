import React, { useState } from "react";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";

export default function Expenses(props) {
  const [filterYear, setFilterYear] = useState("");

  const filterByYear = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter(expense => {return expense.date.getFullYear().toString() === filterYear;});
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filterYear} onYearChange={filterByYear} />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}
