import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import Hello from "./components/Hello";
import LikeBtn from "./components/LikeBtn";
import Position from "./components/Position";
import usePositon from './hooks/useMousePositon'
function App() {
  const position=usePositon()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        {/* <Hello message="hello world2" /> */}
        {/* <LikeBtn /> */}
        {/* <Position /> */}
        <p>
          x:{position.x},y:{position.y}
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

export default App;
