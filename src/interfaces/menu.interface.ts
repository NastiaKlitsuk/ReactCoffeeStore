import { ImageWithTitle } from './image-with-title.interface';

export interface CategoryMenuItemClick {
  onCategoryMenuItemClick({ title, imageSrc }: ImageWithTitle): void;
}

export interface OnOrderMenuItemClick {
  onOrderMenuItemClick({ title, imageSrc }: ImageWithTitle): void;
}

export interface MenuItem {
  name: string;
  image: string;
  isOrderItem: boolean;
}

export interface MenuCategory {
  name: string;
  menuItems: MenuItem[];
}

export interface Menu {
  name: string;
  menu: MenuCategory[];
}

export interface NutritionItem {
  name: string;
  amount: string;
  subNutritionItems?: NutritionItem[]
}
export interface MenuItemOrderInformation {
  menuItemName: string;
  servingSize: string;
  nutritionItems: NutritionItem[];
  ingredients: string;
}
