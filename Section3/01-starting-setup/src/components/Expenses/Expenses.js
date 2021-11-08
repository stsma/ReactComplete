import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
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
      <ExpensesFilter selected={filteredExpense} onFilterChange={onHandleFilterChange}/>
      <Card className="expenses">
        {filteredExpenses.map(expense => 
            <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            ></ExpenseItem>
          )}
      </Card>
    </div>
  );
}

export default Expenses;