import React, { Component, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Remarkable } from "remarkable";

import Person from "./PersonComp/Person";

//simple without jsx
export class Simple extends React.Component {
  render() {
    return React.createElement(
      "div",
      { className: "App" },
      React.createElement("h1", null, "Hey there change")
    );
  }
}

//markdown
export class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.md = new Remarkable();
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: "Hello, **world**!" };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  getRawMarkup() {
    return { __html: this.md.render(this.state.value) };
  }

  render() {
    return (
      <div className="MarkdownEditor">
        <h3>Input</h3>
        <label htmlFor="markdown-content">Enter some markdown</label>
        <textarea
          id="markdown-content"
          onChange={this.handleChange}
          defaultValue={this.state.value}
        />
        <h3>Output</h3>
        <div
          className="content"
          dangerouslySetInnerHTML={this.getRawMarkup()}
        />
      </div>
    );
  }
}

//todo app
export class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">What needs to be done?</label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>Add #{this.state.items.length + 1}</button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now(),
    };
    this.setState((state) => ({
      items: state.items.concat(newItem),
      text: "",
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

// helloMessage
export class HelloMess extends Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

//timer
export class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState((state) => ({
      seconds: state.seconds + 1,
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <div>Seconds: {this.state.seconds}</div>;
  }
}

//custom app
class App extends Component {
  state = {
    persons: [
      { name: "Premnath", age: 29 },
      { name: "Priyadharsini", age: 27 },
      { name: "Pichaimuthu", age: 57 },
      { name: "Padmavathy", age: 42 },
    ],
  };

  switchNameHandler = (newName) => {
    console.log("was clicked!!!");
    //this.state.persons[0].name = "Premnath P";
    this.setState({
      persons: [
        { name: newName, age: 29 },
        { name: "Priyadharsini", age: 27 },
        { name: "Pichaimuthu", age: 57 },
        { name: "Padmavathy", age: 42 },
      ],
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Premnath Pichaimuthu", age: 29 },
        { name: event.target.value, age: 27 },
        { name: "Pichaimuthu", age: 57 },
        { name: "Padmavathy", age: 42 },
      ],
    });
  };

  render() {
    const styles = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    return (
      <div className="App">
        <header className="App-header">
          {/* <Person name="Premnath" age={29} />
          <Person name="Priyadharsini" age={27} />
          <Person name="Pichaimuthu" age={57}>
            Hwy people
          </Person> */}

          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            changed={this.nameChangedHandler}
          />
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
            click={this.switchNameHandler.bind(this, "Pichaimuthu Balaman")}
          >
            Hwy people
          </Person>
          {/* <button
            onClick={this.switchNameHandler.bind(this, "Premnath Pichaimuthu")}
          > */}
          <button
            style={styles}
            onClick={() => this.switchNameHandler("Premnath pichaimuthu!!")}
          >
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

/* 
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
 */
/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

/* 
const persons = [
  { name: "Premnath", age: 29 },
  { name: "Priyadharsini", age: 27 },
  { name: "Pichaimuthu", age: 57 },
  { name: "Padmavathy", age: 42 },
];
 

const App = (props) => {
  const [personState, setPersonState] = useState({
    persons: [
      { name: "Premnath", age: 29 },
      { name: "Priyadharsini", age: 27 },
      { name: "Pichaimuthu", age: 57 },
      { name: "Padmavathy", age: 42 },
    ],
  });

  const switchNameHandler = () => {
    console.log("was clicked!!!");
    //this.state.persons[0].name = "Premnath P";
    setPersonState({
      persons: [
        { name: "Premnath Pichaimuthu", age: 29 },
        { name: "Priyadharsini satyaraj", age: 27 },
        { name: "Pichaimuthu", age: 57 },
        { name: "Padmavathy Pichaimuthu", age: 42 },
      ],
    });
  };

  return (
    <div className="App">
      <h1>Hi I'm a React App</h1>
      <p>This is working!</p>
      <button onClick={switchNameHandler}>Change Name</button>
      <div>
        <Person
          name={personState.persons[0].name}
          age={personState.persons[0].age}
        />
        <Person
          name={personState.persons[1].name}
          age={personState.persons[1].age}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={personState.persons[2].name}
          age={personState.persons[2].age}
        />
      </div>
    </div>
  );
};
*/
export default App;
