import Card from "../UI/Card";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import { useState } from "react/cjs/react.development";

import "./Expenses.css";

const Expenses = (props) => {
  const [filteredExpense, setFilteredExpense] = useState('2020');

  const onHandleFilterChange = (expenseDataFilter) => {
    setFilteredExpense(expenseDataFilter);
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredExpense;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredExpense} onFilterChange={onHandleFilterChange}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;