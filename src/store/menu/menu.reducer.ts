import * as menuActions from './menu.actions';
import { MenuCategory } from '../../interfaces/menu.interface';

export interface MenuState {
  menu: MenuCategory[];
  loading: boolean;
  error: MaybeString;
  orderMenuItemSelected: MaybeMenuItem;
}

export const initialMenuState: MenuState = {
  menu: [],
  loading: false,
  error: null,
  orderMenuItemSelected: null
};

export function menuReducer(
  state = initialMenuState,
  action: menuActions.MenuActions
) {
  switch (action.type) {
    case menuActions.LOAD_MENU:
      return {
        ...state,
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
  }
  return state;
}

export const getMenu = (state: MenuState) => state.menu;
export const getMenuLoading = (state: MenuState) => state.loading;
export const getMenuError = (state: MenuState) => state.error;
export const getOrderMenuItemSelected = (state: MenuState) => state.orderMenuItemSelected
