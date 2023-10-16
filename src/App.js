import logo from "./logo.svg";
import "./App.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import MyComponent from "./MyComponent";

function App() {
  const percentage = 66;

  return (
    <div className="App">
      <header className="App-header">
        <MyComponent title="Hello World" color="green" />
        <MyComponent title="Ciao mondo" />

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Nulla consectetur adipiscing elit.
        </p>
        <div style={{ width: 150 }}>
          <CircularProgressbar value={percentage} text={`${percentage}%`} />
        </div>
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

export default App;
