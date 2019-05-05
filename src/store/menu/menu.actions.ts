import { Action } from 'redux';
import {
  MenuCategory,
  MenuItem,
  MenuItemOrderInformation
} from '../../interfaces/menu.interface';

export const LOAD_MENU = 'LOAD_MENU';
export const LOAD_MENU_SUCCESS = 'LOAD_MENU_SUCCESS';
export const ORDER_MENU_ITEM_SELECTED = 'ORDER_MENU_ITEM_SELECTED';
export const LOAD_ORDER_MENU_ITEM_SELECTED_INFO =
  'LOAD_ORDER_MENU_ITEM_SELECTED_INFO';
export const LOAD_ORDER_MENU_ITEM_SELECTED_INFO_SUCCESS =
  'LOAD_ORDER_MENU_ITEM_SELECTED_INFO_SUCCESS';

export interface ILoadMenu extends Action {
  categoryMenuSelected: string;
}

export interface ILoadMenuSuccess extends Action {
  menu: MenuCategory[];
}

export interface IOrderMenuItemSelected extends Action {
  orderMenuItemSelected: MenuItem;
}

export interface ILoadOrderMenuItemSelectedInfo extends Action {}

export interface ILoadOrderMenuItemSelectedInfoSuccess extends Action {
  menuItemInformation: MenuItemOrderInformation;
}

export function loadMenu(categoryMenuSelected: string) {
  return { type: LOAD_MENU, payload: categoryMenuSelected };
}

export function loadMenuSuccess(menu: MenuCategory[]) {
  return { type: LOAD_MENU_SUCCESS, menu };
}

export function orderMenuItemSelected(orderMenuItemSelected: MenuItem) {
  return { type: ORDER_MENU_ITEM_SELECTED, orderMenuItemSelected };
}

export function loadOrderMenuItemSelectedInfo() {
  return { type: LOAD_ORDER_MENU_ITEM_SELECTED_INFO };
}

export function loadOrderMenuItemSelectedInfoSuccess(
  menuItemInformation: MaybeMenuItemInformation
) {
  return {
    type: LOAD_ORDER_MENU_ITEM_SELECTED_INFO_SUCCESS,
    menuItemInformation
  };
}

export type MenuActions =
  | ILoadMenu
  | ILoadMenuSuccess
  | IOrderMenuItemSelected
  | ILoadOrderMenuItemSelectedInfo
  | ILoadOrderMenuItemSelectedInfoSuccess;
