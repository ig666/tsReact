import React from "react";
import Button, { ButtonSize, ButtonType } from "./components/Button/button";
import MenuItem from "./components/Menu/menuItem";
import Menu from "./components/Menu/subMenu";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu onSelect={(index)=>{console.log(index)}}>
          <MenuItem index='0'>0</MenuItem>
          <MenuItem index='1' disabled>1</MenuItem>
          <MenuItem index='2'>2</MenuItem>
        </Menu>
        <Button
          onClick={() => {
            console.log("xxx");
          }}
        >
          点击11
        </Button>
        <Button size={ButtonSize.Large}>点击</Button>
        <Button size={ButtonSize.Small} btnType={ButtonType.Danger}>
          点击
        </Button>
        <Button btnType={ButtonType.Primary}>点击试试</Button>
        <Button btnType={ButtonType.Link} herf="www.baidu.com">
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
