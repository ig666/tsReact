import React from "react";
import Button from "./components/Button/button";

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
        <Button btnType={'link'} herf="www.baidu.com">
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
