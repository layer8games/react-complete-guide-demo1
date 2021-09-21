import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 116.23, date: new Date(2021, 9, 21) },
    { title: "HOA", amount: 385.45, date: new Date(2021, 9, 10) },
    { title: "New Game", amount: 59.99, date: new Date(2021, 9, 16) },
    { title: "Mortgage", amount: 1403.87, date: new Date(2021, 9, 1) },
  ];

  return (
    <div>
      <h2>Let's Get Started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
