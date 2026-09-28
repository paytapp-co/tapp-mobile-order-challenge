import { createContext, useContext, useEffect, useReducer } from 'react';

const BasketContext = createContext(null);
const STORAGE_KEY = 'tapp-basket';

function reducer(lines, action) {
  switch (action.type) {
    case 'add': {
      const existing = lines.find((line) => line.itemId === action.item.id);
      if (existing) {
        return lines.map((line) =>
          line.itemId === action.item.id ? { ...line, quantity: line.quantity + 1 } : line
        );
      }
      return [
        ...lines,
        {
          itemId: action.item.id,
          name: action.item.name,
          modifiers: action.modifiers,
          price: action.item.price + action.modifiers.reduce((sum, m) => sum + m.price, 0),
          quantity: 1,
        },
      ];
    }
    case 'increment':
      return lines.map((line) =>
        line.itemId === action.itemId ? { ...line, quantity: line.quantity + 1 } : line
      );
    case 'decrement':
      return lines.map((line) =>
        line.itemId === action.itemId ? { ...line, quantity: line.quantity - 1 } : line
      );
    case 'clear':
      return [];
    default:
      return lines;
  }
}

export function BasketProvider({ children }) {
  const [lines, dispatch] = useReducer(reducer, [], () =>
    JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? []
  );

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  }, [lines]);

  const total = lines.reduce((sum, line) => sum + line.price * line.quantity, 0);
  const count = lines.reduce((sum, line) => sum + line.quantity, 0);

  const value = {
    lines,
    total,
    count,
    addItem: (item, modifiers = []) => dispatch({ type: 'add', item, modifiers }),
    increment: (itemId) => dispatch({ type: 'increment', itemId }),
    decrement: (itemId) => dispatch({ type: 'decrement', itemId }),
    clear: () => dispatch({ type: 'clear' }),
  };

  return <BasketContext.Provider value={value}>{children}</BasketContext.Provider>;
}

export function useBasket() {
  return useContext(BasketContext);
}
