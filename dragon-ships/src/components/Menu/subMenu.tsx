import React, { createContext, CSSProperties, useState } from "react";
import classNames from "classnames";

type MenuMode = "horizontal" | "vertical";
type OnselecTCallback = (selectedIndex: string) => void;
export interface MenuProps {
  /**默认 active 的菜单项的索引值 */
  defaultIndex?: string;
  className?: string;
  /**菜单类型 横向或者纵向 */
  mode?: MenuMode;
  style?: CSSProperties;
  /**点击菜单项触发的回掉函数 */
  onSelect?: OnselecTCallback
}
interface IMenuContext {
  index: string;
  onSelect?: OnselecTCallback
}

export const MenuContext = createContext<IMenuContext>({ index: "0" });

const Menu: React.FC<MenuProps> = (props) => {
  const { defaultIndex, className, mode, style, onSelect, children } = props;
  const [currentActive, setActive] = useState(defaultIndex);

  const handleClick = (index: string) => {
    setActive(index);
    if (onSelect) {
      onSelect(index);
    }
  };
  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : "0",
    onSelect: handleClick,
  };
  const classes = classNames("viking-menu", className, {
    "menu-vertical": mode === "vertical",
    "menu-horizontal": mode !== "vertical",
  });

  return (
    <MenuContext.Provider value={passedContext}>
      <ul style={style} className={classes}>
        {children}
      </ul>
    </MenuContext.Provider>
  );
};

Menu.defaultProps = {
  defaultIndex: "0",
  mode: "horizontal",
};
export default Menu;