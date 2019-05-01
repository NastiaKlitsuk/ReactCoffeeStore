import { Action } from 'redux';
import { MenuCategory, MenuItem } from '../../interfaces/menu.interface';

export const LOAD_MENU = 'LOAD_MENU';
export const LOAD_MENU_SUCCESS = 'LOAD_MENU_SUCCESS';
export const ORDER_MENU_ITEM_SELECTED = 'ORDER_MENU_ITEM_SELECTED';

export interface ILoadMenu extends Action {}

export interface ILoadMenuSuccess extends Action {
  menu: MenuCategory[];
}

export interface IOrderMenuItemSelected extends Action {
  orderMenuItemSelected: MenuItem;
}

export function loadMenu() {
  return { type: LOAD_MENU };
}

export function loadMenuSuccess(menu: MenuCategory[]) {
  return { type: LOAD_MENU_SUCCESS, menu };
}

export function orderMenuItemSelected(orderMenuItemSelected: MenuItem) {
  return { type: ORDER_MENU_ITEM_SELECTED, orderMenuItemSelected };
}

export type MenuActions = ILoadMenu | ILoadMenuSuccess | IOrderMenuItemSelected;
