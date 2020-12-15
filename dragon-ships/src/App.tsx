import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./components/Button/button";
import MenuItem from "./components/Menu/menuItem";
import { Menu } from "./components/Menu/menu";
import SubMenu from "./components/Menu/subMenu";
import { AutoComplete } from "./components/AutoComplete/autoComplete";
library.add(fas);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button>点击11</Button>
        <Button size={"lg"}>点击</Button>
        <Button size={"sm"} btnType={"danger"}>
          点击
        </Button>
        <Button btnType={"primary"}>点击试试</Button>
        <Button btnType={"link"} href="www.baidu.com">
          link
        </Button>
        <Menu mode={"horizontal"}>
          <MenuItem>0</MenuItem>
          <MenuItem disabled>1</MenuItem>
          <MenuItem>2</MenuItem>
          <SubMenu text="subMenu">
            <MenuItem>01111</MenuItem>
            <MenuItem disabled>11111</MenuItem>
            <MenuItem>2111</MenuItem>
          </SubMenu>
        </Menu>
      </header>
    </div>
  );
}

export default App;
