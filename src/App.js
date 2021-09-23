import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    { title: "Car Insurance", amount: 116.23, date: new Date(2021, 9, 21) },
    { title: "HOA", amount: 385.45, date: new Date(2021, 9, 10) },
    { title: "New Game", amount: 59.99, date: new Date(2021, 9, 16) },
    { title: "Mortgage", amount: 1403.87, date: new Date(2021, 9, 1) },
  ];

  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
