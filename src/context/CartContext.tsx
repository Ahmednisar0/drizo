import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { CartItem, Product } from '../types/Product';

interface CartState {
  items: CartItem[];
  total: number;
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: Product }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' };

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
} | null>(null);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const product = action.payload;
      const existingItemIndex = state.items.findIndex(
        item => item.id === product.id
      );

      let newItems;
      if (existingItemIndex > -1) {
        newItems = [...state.items];
        newItems[existingItemIndex].quantity += 1;
      } else {
        const newItem: CartItem = {
          ...product,
          selectedSize: product.sizes[0],
          selectedColor: product.colors[0],
          quantity: 1,
        };
        newItems = [...state.items, newItem];
      }

      const total = newItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
      return { items: newItems, total };
    }

    case 'REMOVE_ITEM': {
      const newItems = state.items.filter(item => item.id !== action.payload);
      const total = newItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
      return { items: newItems, total };
    }

    case 'UPDATE_QUANTITY': {
      const { id, quantity } = action.payload;
      const newItems = state.items.map(item =>
        item.id === id ? { ...item, quantity: Math.max(0, quantity) } : item
      ).filter(item => item.quantity > 0);
      
      const total = newItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
      return { items: newItems, total };
    }

    case 'CLEAR_CART':
      return { items: [], total: 0 };

    default:
      return state;
  }
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [], total: 0 });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};