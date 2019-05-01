import { MenuCategory, Menu } from '../interfaces/menu.interface';
import { MainMenuCategories } from '../enums/menu.enum';

export const MainMenu: MenuCategory[] = [
  {
    name: 'Drinks',
    menuItems: [
      {
        name: MainMenuCategories.HotCoffees,
        image: '/assets/hot_coffees.jpg',
        isOrderItem: false
      },
      {
        name: MainMenuCategories.HotDrinks,
        image: '/assets/hot_drinks.jpg',
        isOrderItem: false
      },
      {
        name: MainMenuCategories.ColdCoffees,
        image: '/assets/cold_coffees.jpg',
        isOrderItem: false
      },
      {
        name: MainMenuCategories.ColdDrinks,
        image: '/assets/cold_drinks.jpg',
        isOrderItem: false
      },
      {
        name: MainMenuCategories.HotTeas,
        image: '/assets/hot_teas.jpg',
        isOrderItem: false
      },
      {
        name: MainMenuCategories.IcedTeas,
        image: '/assets/iced_tees.jpg',
        isOrderItem: false
      }
    ]
  },
  {
    name: 'Food',
    menuItems: [
      {
        name: MainMenuCategories.HotBreakfest,
        image: '/assets/hot_breakfest.jpg',
        isOrderItem: false
      },
      {
        name: MainMenuCategories.Lunch,
        image: '/assets/lunch.jpg',
        isOrderItem: false
      },
      {
        name: MainMenuCategories.YogurtCustard,
        image: '/assets/yogurt.jpg',
        isOrderItem: false
      },
      {
        name: MainMenuCategories.Bakery,
        image: '/assets/bagel.jpg',
        isOrderItem: false
      },
      {
        name: MainMenuCategories.SnacksAndSweets,
        image: '/assets/snacks_sweets.jpg',
        isOrderItem: false
      }
    ]
  },
  {
    name: 'At Home Coffee',
    menuItems: [
      {
        name: MainMenuCategories.WholeBean,
        image: '/assets/whole_bean.jpg',
        isOrderItem: false
      },
      {
        name: MainMenuCategories.VIAInstant,
        image: '/assets/via_instant.jpg',
        isOrderItem: false
      },
      {
        name: MainMenuCategories.VerismoPods,
        image: '/assets/verismo_pods.jpg',
        isOrderItem: false
      },
      {
        name: MainMenuCategories.ColdBrew,
        image: '/assets/cold_brew.jpg',
        isOrderItem: false
      }
    ]
  }
];

export const HotCoffeesMenu: MenuCategory[] = [
  {
    name: 'Americanos',
    menuItems: [
      {
        name: 'Caffee Americano',
        image: '/assets/caffe_americano.jpg',
        isOrderItem: true
      },
      {
        name: 'Blonde Caffee Americano',
        image: '/assets/caffe_americano_blonde.jpg',
        isOrderItem: true
      }
    ]
  },
  {
    name: 'Brewed Coffees',
    menuItems: [
      {
        name: 'Blonde Roast',
        image: '/assets/blonde_roast.jpg',
        isOrderItem: true
      },
      {
        name: 'Caffe Misto',
        image: '/assets/caffe_misto.jpg',
        isOrderItem: true
      },
      {
        name: 'Featured Dark Roast',
        image: '/assets/featured_dark_roast.jpg',
        isOrderItem: true
      },
      {
        name: 'Pike Place Roast',
        image: '/assets/pike_place_roast.jpg',
        isOrderItem: true
      }
    ]
  },
  {
    name: 'Cappuccinos',
    menuItems: [
      {
        name: 'Cappuccino',
        image: '/assets/cappuccino.jpg',
        isOrderItem: true
      },
      {
        name: 'Blonde Cappucino',
        image: '/assets/cappuccino_blonde.jpg',
        isOrderItem: true
      }
    ]
  }
];

export const Menus: Menu[] = [
  { name: MainMenuCategories.MainMenu, menu: MainMenu },
  { name: MainMenuCategories.HotCoffees, menu: HotCoffeesMenu }
];
