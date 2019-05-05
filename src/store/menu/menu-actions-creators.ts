import { Dispatch } from 'react';
import * as menuActions from './menu.actions';
import { Menus } from '../../mocks/menu';
import { MenuItem } from '../../interfaces/menu.interface';
import { MenuItemsInformation } from '../../mocks/menu-items-information';

export function fetchMenu(menuName: string) {
  return (dispatch: Dispatch<menuActions.MenuActions>) => {
    dispatch(menuActions.loadMenu(menuName));
    const menu = getMenuByName(menuName);
    dispatch(menuActions.loadMenuSuccess(menu));
  };
}

function getMenuByName(menuName: string) {
  const menu = Menus.find(menu => menu.name === menuName)!.menu;
  return menu || [];
}

export function setOrderItemMenu(orderMenuItem: MenuItem) {
  return (dispatch: Dispatch<menuActions.MenuActions>) => {
    dispatch(menuActions.orderMenuItemSelected(orderMenuItem));
  };
}

export function fetchMenuItemOrderInfo(menuItemOrderName: string) {
  return (dispatch: Dispatch<menuActions.MenuActions>) => {
    dispatch(menuActions.loadOrderMenuItemSelectedInfo())
    const menuItemOrderSelectedInfo = getMenuItemOrderInfo(menuItemOrderName)
    dispatch(menuActions.loadOrderMenuItemSelectedInfoSuccess(menuItemOrderSelectedInfo))
  };
}

function getMenuItemOrderInfo(menuName: string) {
  const menuItemOrderInfo = MenuItemsInformation.find(menuItemInformation => menuItemInformation.menuItemName === menuName)
  return menuItemOrderInfo || null;
}
