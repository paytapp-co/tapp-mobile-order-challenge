export const venue = {
  name: 'Riverside Stadium',
  location: 'Block C Kiosk',
  currency: 'GBP',
};

export const menu = [
  {
    id: 'burger',
    name: 'Classic Burger',
    category: 'Food',
    price: 8.5,
    available: true,
    modifiers: [
      { id: 'cheese', name: 'Add cheese', price: 0.8 },
      { id: 'bacon', name: 'Add bacon', price: 1.15 },
    ],
  },
  {
    id: 'hotdog',
    name: 'Hot Dog',
    category: 'Food',
    price: 6.1,
    available: false,
    modifiers: [{ id: 'onions', name: 'Fried onions', price: 0.5 }],
  },
  {
    id: 'chips',
    name: 'Chips',
    category: 'Food',
    price: 3.2,
    available: true,
    modifiers: [{ id: 'cheese-sauce', name: 'Cheese sauce', price: 1.1 }],
  },
  {
    id: 'cola',
    name: 'Cola',
    category: 'Drinks',
    price: 2.7,
    available: true,
    modifiers: [{ id: 'large', name: 'Make it large', price: 0.7 }],
  },
  {
    id: 'coffee',
    name: 'Coffee',
    category: 'Drinks',
    price: 4.35,
    available: true,
    modifiers: [{ id: 'oat', name: 'Oat milk', price: 0.4 }],
  },
  {
    id: 'water',
    name: 'Bottled Water',
    category: 'Drinks',
    price: 1.1,
    available: true,
    modifiers: [],
  },
  {
    id: 'lager',
    name: 'Pint of Lager',
    category: 'Drinks',
    price: 6.35,
    available: true,
    modifiers: [],
  },
];
