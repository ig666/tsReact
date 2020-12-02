import React from "react";
import Button from "./components/Button/button";
import MenuItem from "./components/Menu/menuItem";
import Menu from "./components/Menu/menu";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button>点击11</Button>
        <Button size={'lg'}>点击</Button>
        <Button size={'sm'} btnType={'danger'} >点击</Button>
        <Button btnType={'primary'} >
          点击试试
        </Button>
        <Button btnType={'link'} href="www.baidu.com">link</Button>
        <Menu mode={'vertical'}>
          <MenuItem >0</MenuItem>
          <MenuItem disabled>1</MenuItem>
          <MenuItem >2</MenuItem>
        </Menu>
      </header>
    </div>
  );
}

export default App;
