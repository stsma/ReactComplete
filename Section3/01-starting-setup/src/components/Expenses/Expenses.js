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

  return (
    <div>
      <ExpensesFilter selected={filteredExpense} onFilterChange={onHandleFilterChange}/>
      <Card className="expenses">
        <ExpenseItem
          title={props.data[0].title}
          amount={props.data[0].amount}
          date={props.data[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.data[1].title}
          amount={props.data[1].amount}
          date={props.data[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.data[2].title}
          amount={props.data[2].amount}
          date={props.data[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.data[3].title}
          amount={props.data[3].amount}
          date={props.data[3].date}
        ></ExpenseItem>
      </Card>
    </div>
  );
}

export default Expenses;
