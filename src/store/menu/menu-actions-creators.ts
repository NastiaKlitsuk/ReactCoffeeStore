import { Dispatch } from 'react';
import * as menuActions from './menu.actions';
import { Menus } from '../../mocks/menu';
import { MenuItem } from '../../interfaces/menu.interface';

export function fetchMenu(menuName: string) {
  return (dispatch: Dispatch<menuActions.MenuActions>) => {
    dispatch(menuActions.loadMenu());
    const menu = getMenuByName(menuName);
    dispatch(menuActions.loadMenuSuccess(menu));
  };
}

function getMenuByName(menuName: string) {
  const selectedSubMenuIndex = Menus.findIndex(menu => menu.name === menuName);
  if (selectedSubMenuIndex > -1) return Menus[selectedSubMenuIndex].menu;
  return [];
}

export function setOrderItemMenu(orderMenuItem: MenuItem) {
  return (dispatch: Dispatch<menuActions.MenuActions>) => {
    dispatch(menuActions.orderMenuItemSelected(orderMenuItem));
  };
}
