import React, { Component } from "react";
import "./App.css";
import Person from "./components/Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>HI, I'm in the app</h1>
        <p>This is really working!</p>
        <Person name="Herbert" age="423" />
        <Person name="Stanley" age="782">
          I have cool hobbies too
        </Person>
      </div>
    );
  }
}

export default App;
