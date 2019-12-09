import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { request } from "./backend-request";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      return await request("health");
    };
    fetchData();
    fetch(`/todos`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
        }
    }).then(res => res.json()).then(data => console.log(data))
    console.log('fetchData')
  });

  const handleOnClick = () => {
    fetch(`/todos`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
            todo: 'buy groceries',
            done: false,
        }),
    }).then(res => console.log(res))
  }
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
        <button onClick={handleOnClick}>hello</button>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
