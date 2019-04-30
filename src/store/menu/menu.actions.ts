import { Action } from 'redux';
import { MenuCategory } from '../../interfaces/menu.interfaces';

export const LOAD_MENU = 'LOAD_MENU';
export const MENU_ITEM_SELECTED = 'MENU_ITEM_SELECTED';
export const LOAD_MENU_SUCCESS = 'LOAD_MENU_SUCCESS';

export interface ILoadMenu extends Action {}

export interface ILoadMenuSuccess extends Action {
  menu: MenuCategory[];
}

export function loadMenu() {
  return { type: LOAD_MENU };
}

export function loadMenuSuccess(menu: MenuCategory[]) {
  return { type: LOAD_MENU_SUCCESS, menu };
}

export type MenuActions = ILoadMenu | ILoadMenuSuccess;
