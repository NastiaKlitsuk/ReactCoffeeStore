import { UserMessage } from '../constants/user-message';

export enum NAVIGATION_MENU {
  Order = 'ORDER',
  Cards = 'CARDS',
  Gift = 'GIFT',
  Stores = 'STORES'
}

export enum NAVIGATION_SUB_MENU {
  Menu = 'Menu',
  Favorite = 'Favorite',
  Previous = 'Previous'
}

export enum NavigationMenuRoutes {
  order = 'order',
  cards = 'cards',
  stores = 'stores',
  gift = 'gift'
}

export enum NavigationSubMenuRoutes {
  menu = '/order/menu',
  favorite = '/order/favorite',
  previous = '/order/previous'
}

export interface NavigationMenu {
  name: string;
  subMenu: NavigationMenu[];
  userMessage?: UserMessage;
  navigateTo: string;
}

export type MaybeNavigationMenu = NavigationMenu | null

export const navigationMenus: NavigationMenu[] = [
  {
    name: NAVIGATION_MENU.Order,
    subMenu: [
      {
        name: NAVIGATION_SUB_MENU.Menu,
        subMenu: [],
        navigateTo: NavigationSubMenuRoutes.menu
      },
      {
        name: NAVIGATION_SUB_MENU.Favorite,
        subMenu: [],
        navigateTo: NavigationSubMenuRoutes.favorite
      },
      {
        name: NAVIGATION_SUB_MENU.Previous,
        subMenu: [],
        navigateTo: NavigationSubMenuRoutes.previous
      }
    ],
    navigateTo: NavigationMenuRoutes.order
  },
  {
    name: NAVIGATION_MENU.Cards,
    subMenu: [],
    userMessage: {
      message: 'Coffee store cards'
    },
    navigateTo: NavigationMenuRoutes.cards
  },
  {
    name: NAVIGATION_MENU.Gift,
    subMenu: [],
    userMessage: {
      message: 'Gift cards'
    },
    navigateTo: NavigationMenuRoutes.gift
  },
  {
    name: NAVIGATION_MENU.Stores,
    subMenu: [],
    navigateTo: NavigationMenuRoutes.stores
  }
];
