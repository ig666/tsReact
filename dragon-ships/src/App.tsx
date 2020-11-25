import React from "react";
import Button, { ButtonSize, ButtonType } from "./components/Button/button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button>点击</Button>
        <Button btnType={ButtonType.Primary} disabled>
          点击
        </Button>
        <Button btnType={ButtonType.Link} disabled herf="www.baidu.com">
          点击
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
