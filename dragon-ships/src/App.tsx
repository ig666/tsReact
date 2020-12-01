import React from "react";
import Button from "./components/Button/button";
import MenuItem from "./components/Menu/menuItem";
import Menu from "./components/Menu/subMenu";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={() => { console.log('xxx') }}>点击11</Button>
        <Button size={'lg'}>点击</Button>
        <Button size={'sm'} btnType={'danger'} >点击</Button>
        <Button btnType={'primary'} >
          点击试试
        </Button>
        <Button btnType={'link'} herf="www.baidu.com">link</Button>
        <Menu onSelect={(index)=>{console.log(index)}}>
          <MenuItem index='0'>0</MenuItem>
          <MenuItem index='1' disabled>1</MenuItem>
          <MenuItem index='2'>2</MenuItem>
        </Menu>
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
