
import { FC } from 'react'
import { Menu, MenuProps } from './menu'
import MenuItem, { MenuItemProps } from './menuItem'
import SubMenu, { subMenuProps } from './subMenu'

type IMenuComponent = FC<MenuProps> & {
    menuItem: FC<MenuItemProps>,
    subMenu: FC<subMenuProps>
}
const TransMenu = Menu as IMenuComponent
TransMenu.menuItem = MenuItem
TransMenu.subMenu = SubMenu
export default TransMenu
