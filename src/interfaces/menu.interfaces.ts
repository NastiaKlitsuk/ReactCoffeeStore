export interface MenuItemClick {
  onMenuItemClick(name: string): void;
}

export interface MenuItem {
  name: string;
  image: string;
}

export interface MenuCategory {
  name: string;
  menuItems: MenuItem[];
}

export interface Menu {
  name: string;
  menu: MenuCategory[];
}
