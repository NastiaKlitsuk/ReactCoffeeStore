import { MenuItemOrderInformation } from '../interfaces/menu.interface';

export const MenuItemsInformation: MenuItemOrderInformation[] = [
  {
    menuItemName: 'Caffee Americano',
    servingSize: '16 fl oz',
    nutritionItems: [
      {
        name: 'Calories',
        amount: '400'
      },
      {
        name: 'Total Fat',
        amount: '16',
        subNutritionItems: [
          {
            name: 'Saturated Fat',
            amount: '10'
          },
          {
            name: 'Trans Fat',
            amount: '6'
          }
        ]
      }
    ],
    ingredients:
      'Milk, Mocha Sauce [Water, Sugar, Cocoa Processed With Alkali, Natural Flavor], Whipped Cream [Cream (Cream, Mono And Diglycerides, Carageenan), Vanilla Syrup (Sugar, Water, Natural Flavors, Potassium Sorbate, Citric Acid)]'
  }
];
