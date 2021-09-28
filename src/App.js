import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    { title: "Food", amount: 16.23, date: new Date(2021, 9, 21) },
    { title: "Bills", amount: 35.45, date: new Date(2021, 9, 10) },
    { title: "New Game", amount: 59.99, date: new Date(2021, 9, 16) },
    { title: "Rent", amount: 403.87, date: new Date(2021, 9, 1) },
  ];

  const addExpenseHandler = (newExpense) => {
    console.log(newExpense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
