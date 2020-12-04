import React, { useState, useContext } from "react";
import classNames from "classnames";
import { MenuContext } from "./menu";
import { MenuItemProps } from './menuItem'
import { clearInterval } from "timers";


export interface subMenuProps {
    index?: string;
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
    text: string;
}

const SubMenu: React.FC<subMenuProps> = (props) => {
    const [menuOpen, setOpen] = useState(false)
    const { index, disabled, className, style, text, children } = props
    const context = useContext(MenuContext)
    const classes = classNames('menu-item submenu-item', className, {
        'is-active': context.index === index,
    })
    const subMenuClasses = classNames('viking-submenu', className, {
        "is-disabled": disabled,
        'menu-opened': menuOpen,
    })
    let timer: any
    const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
        clearTimeout(timer)
        e.preventDefault()
        timer = setTimeout(() => {
            setOpen(toggle)
        }, 300)
    }
    const handleClick = (e: React.MouseEvent, toggle: boolean) => {
        e.preventDefault()
        setOpen(toggle)
    }
    const hoverEvents = (context.mode === 'horizontal' ? {
        onMouseEnter: (e: React.MouseEvent) => { handleMouse(e, true) },
        onMouseLeave: (e: React.MouseEvent) => { handleMouse(e, false) }
    } : '')
    const clickEvents = context.mode !== 'horizontal' ? {
        onClick:(e:React.MouseEvent)=>{handleClick(e,!menuOpen)}
    } : ''
    const childRender = () => {
        return React.Children.map(children, (child, i) => {
            let childElement = child as React.FunctionComponentElement<MenuItemProps>
            if (childElement.type.displayName === 'menuItem') {
                return React.cloneElement(childElement, { index: `${index}-${i}` })
            } else {
                console.error("Warning: Menu has a child which is not a MenuItem component")
            }
        })
    }

    return (
        <li className={classes} {...hoverEvents}>
            <div {...clickEvents}>{text}</div>
            <ul className={subMenuClasses} >
                {childRender()}
            </ul>
        </li>
    )
}

SubMenu.displayName = 'subMenu'

export default SubMenu