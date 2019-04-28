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

enum MainMenuCategories {
  HotCoffees = 'Hot Coffees',
  HotDrinks = 'Hot Drinks',
  ColdCoffees = 'Cold Coffees',
  ColdDrinks = 'Cold Drinks',
  HotTeas = 'Hot Teas',
  IcedTeas = 'Iced Teas',
  HotBreakfest = 'Hot Breakfast',
  Lunch = 'Lunch',
  YogurtCustard = 'Yogurt & Custard',
  Bakery = 'Bakery',
  SnacksAndSweets = 'Snacks and Sweets',
  WholeBean = 'Whole Bean',
  VIAInstant = 'VIA Instant',
  VerismoPods = 'Verismo Pods',
  ColdBrew = 'Cold Brew'
}

export const MainMenu: MenuCategory[] = [
  {
    name: 'Drinks',
    menuItems: [
      { name: MainMenuCategories.HotCoffees, image: '/assets/hot_coffees.jpg' },
      { name: MainMenuCategories.HotDrinks, image: '/assets/hot_drinks.jpg' },
      {
        name: MainMenuCategories.ColdCoffees,
        image: '/assets/cold_coffees.jpg'
      },
      { name: MainMenuCategories.ColdDrinks, image: '/assets/cold_drinks.jpg' },
      { name: MainMenuCategories.HotTeas, image: '/assets/hot_teas.jpg' },
      { name: MainMenuCategories.IcedTeas, image: '/assets/iced_tees.jpg' }
    ]
  },
  {
    name: 'Food',
    menuItems: [
      {
        name: MainMenuCategories.HotBreakfest,
        image: '/assets/hot_breakfest.jpg'
      },
      { name: MainMenuCategories.Lunch, image: '/assets/lunch.jpg' },
      { name: MainMenuCategories.YogurtCustard, image: '/assets/yogurt.jpg' },
      { name: MainMenuCategories.Bakery, image: '/assets/bagel.jpg' },
      {
        name: MainMenuCategories.SnacksAndSweets,
        image: '/assets/snacks_sweets.jpg'
      }
    ]
  },
  {
    name: 'At Home Coffee',
    menuItems: [
      { name: MainMenuCategories.WholeBean, image: '/assets/whole_bean.jpg' },
      { name: MainMenuCategories.VIAInstant, image: '/assets/via_instant.jpg' },
      {
        name: MainMenuCategories.VerismoPods,
        image: '/assets/verismo_pods.jpg'
      },
      { name: MainMenuCategories.ColdBrew, image: '/assets/cold_brew.jpg' }
    ]
  }
];

export const HotCoffeesMenu: MenuCategory[] = [
  {
    name: 'Americanos',
    menuItems: [
      { name: 'Caffee Americano', image: '/assets/caffe_americano.jpg' },
      { name: 'Blonde Caffee Americano', image: '/assets/caffe_americano_blonde.jpg' }
    ]
  },
  {
    name: 'Brewed Coffees',
    menuItems: [
      { name: 'Blonde Roast', image: '/assets/blonde_roast.jpg' },
      { name: 'Caffe Misto', image: '/assets/caffe_misto.jpg' },
      { name: 'Featured Dark Roast', image: '/assets/featured_dark_roast.jpg' },
      { name: 'Pike Place Roast', image: '/assets/pike_place_roast.jpg' }
    ]
  },
  {
    name: 'Cappuccinos',
    menuItems: [
      { name: 'Cappuccino', image: '/assets/cappuccino.jpg' },
      { name: 'Blonde Cappucino', image: '/assets/cappuccino_blonde.jpg' }
    ]
  }
];

export interface SubMenu {
  name: string;
  menu: MenuCategory[];
}
export const SubMenus: SubMenu[] = [
  { name: MainMenuCategories.HotCoffees, menu: HotCoffeesMenu }
];
