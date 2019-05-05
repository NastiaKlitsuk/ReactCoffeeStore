import * as menuActions from './menu.actions';
import { MenuCategory } from '../../interfaces/menu.interface';

export interface MenuState {
  menu: MenuCategory[];
  loading: boolean;
  error: MaybeString;
  categoryMenuSelected: MaybeString;
  orderMenuItemSelected: MaybeMenuItem;
  orderMenuItemSelectedInfo: MaybeMenuItemInformation;
}

export const initialMenuState: MenuState = {
  menu: [],
  loading: false,
  error: null,
  categoryMenuSelected: null,
  orderMenuItemSelected: null,
  orderMenuItemSelectedInfo: null
};

export function menuReducer(
  state = initialMenuState,
  action: menuActions.MenuActions
) {
  switch (action.type) {
    case menuActions.LOAD_MENU:
      const categoryMenuSelected = (action as menuActions.ILoadMenu).categoryMenuSelected
      return {
        ...state,
        categoryMenuSelected,
        loading: true
      };
    case menuActions.LOAD_MENU_SUCCESS:
      const menu = (action as menuActions.ILoadMenuSuccess).menu;
      return {
        ...state,
        loading: false,
        menu
      };
    case menuActions.ORDER_MENU_ITEM_SELECTED:
      const orderMenuItemSelected = (action as menuActions.IOrderMenuItemSelected)
        .orderMenuItemSelected;
      return {
        ...state,
        orderMenuItemSelected
      };
    case menuActions.LOAD_ORDER_MENU_ITEM_SELECTED_INFO:
      return {
        ...state,
        loading: true
      };
    case menuActions.LOAD_ORDER_MENU_ITEM_SELECTED_INFO_SUCCESS:
      const orderMenuItemSelectedInfo = (action as menuActions.ILoadOrderMenuItemSelectedInfoSuccess)
        .menuItemInformation;
      return {
        ...state,
        loading: false,
        orderMenuItemSelectedInfo
      };
  }
  return state;
}

export const getMenu = (state: MenuState) => state.menu;
export const getMenuLoading = (state: MenuState) => state.loading;
export const getMenuError = (state: MenuState) => state.error;
export const getOrderMenuItemSelected = (state: MenuState) =>
  state.orderMenuItemSelected;
export const getOrderMenuItemSelectedInfo = (state: MenuState) =>
  state.orderMenuItemSelectedInfo;
