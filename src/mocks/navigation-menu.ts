import { UserMessage } from '../constants/user-message';
import {
  NAVIGATION_MENU_TITLES,
  NAVIGATION_ORDER_MENU_TITLES,
  NavigationSubMenuRoutes,
  NavigationMenuRoutes
} from '../enums/navigation-menu.enum';

export interface NavigationMenu {
  name: string;
  subMenu: NavigationMenu[];
  userMessage?: UserMessage;
  navigateTo: string;
}

export type MaybeNavigationMenu = NavigationMenu | null;

export const navigationMenus: NavigationMenu[] = [
  {
    name: NAVIGATION_MENU_TITLES.Order,
    subMenu: [
      {
        name: NAVIGATION_ORDER_MENU_TITLES.Menu,
        subMenu: [],
        navigateTo: NavigationSubMenuRoutes.menu
      },
      {
        name: NAVIGATION_ORDER_MENU_TITLES.Favorite,
        subMenu: [],
        navigateTo: NavigationSubMenuRoutes.favorite
      },
      {
        name: NAVIGATION_ORDER_MENU_TITLES.Previous,
        subMenu: [],
        navigateTo: NavigationSubMenuRoutes.previous
      }
    ],
    navigateTo: NavigationMenuRoutes.order
  },
  {
    name: NAVIGATION_MENU_TITLES.Cards,
    subMenu: [],
    userMessage: {
      message: 'Coffee store cards'
    },
    navigateTo: NavigationMenuRoutes.cards
  },
  {
    name: NAVIGATION_MENU_TITLES.Gift,
    subMenu: [],
    userMessage: {
      message: 'Gift cards'
    },
    navigateTo: NavigationMenuRoutes.gift
  },
  {
    name: NAVIGATION_MENU_TITLES.Stores,
    subMenu: [],
    navigateTo: NavigationMenuRoutes.stores
  }
];
