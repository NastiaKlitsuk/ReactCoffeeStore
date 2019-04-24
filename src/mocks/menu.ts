export interface MenuItem {
  name: string;
  image: string;
}

export const EmptyMenuItem = {
  name: '',
  image: ''
};

export interface MenuCategory {
  name: string;
  menuItems: MenuItem[];
}

export const EmptyMenu: MenuCategory[] = [
  {
    name: '',
    menuItems: [EmptyMenuItem]
  }
];

export const StoreMenu: MenuCategory[] = [
  {
    name: 'Drinks',
    menuItems: [
      { name: 'Hot Coffees', image: '/assets/hot_coffees.jpg' },
      { name: 'Hot Drinks', image: '/assets/hot_drinks.jpg' },
      { name: 'Cold Coffees', image: '/assets/cold_coffees.jpg' },
      { name: 'Cold Drinks', image: '/assets/cold_drinks.jpg' },
      { name: 'Hot Teas', image: '/assets/hot_teas.jpg' },
      { name: 'Iced Teas', image: '/assets/iced_tees.jpg' }
    ]
  },
  {
    name: 'Food',
    menuItems: [
      { name: 'Hot Breakfast', image: '/assets/hot_breakfest.jpg' },
      { name: 'Lunch', image: '/assets/lunch.jpg' },
      { name: 'Yogurt & Custard', image: '/assets/yogurt.jpg' },
      { name: 'Bakery', image: '/assets/bagel.jpg' },
      { name: 'Snacks and Sweets', image: '/assets/snacks_sweets.jpg' }
    ]
  },
  {
    name: 'At Home Coffee',
    menuItems: [
      { name: 'Whole Bean', image: '/assets/whole_bean.jpg' },
      { name: 'VIA Instant', image: '/assets/via_instant.jpg' },
      { name: 'Verismo Pods', image: '/assets/verismo_pods.jpg' },
      { name: 'Cold Brew', image: '/assets/cold_brew.jpg' }
    ]
  }
];
