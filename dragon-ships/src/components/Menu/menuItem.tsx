import React, { useContext } from "react";
import classNames from "classnames";
import { MenuContext } from "./subMenu";

interface MenuItemProps {
  index?: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { style, index, disabled, className, children } = props;
  const context = useContext(MenuContext);
  const classes = classNames("menu-item", className, {
    "is-disabled": disabled,
    "is-active": context.index === index,
  });
  const handleClick = () => {
    if (context.onSelect && !disabled && (typeof index === 'string')) {
      context.onSelect(index)
    }
  }
  return (
    <li style={style} className={classes} onClick={handleClick}>
      {children}
    </li>
  );
};

export default MenuItem;