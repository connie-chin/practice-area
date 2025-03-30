import { createContext } from 'react';
import { Product } from '../lib';

export type ShoppingCartItem = {
  //each item in array
  product: Product;
  quantity: number;
};

export type CartContextValues = {
  cart: ShoppingCartItem[];
  addToCart: (product: Product, quantity: number) => void; //function doesnt return anything, but will be receiving these values
};

export const CartContext = createContext<CartContextValues>({
  // this is initial value to set stage for what it will receive. object w cart property and addToCart function. set these up so they will be available to other components.
  cart: [],
  addToCart: () => undefined,
});

export const CartProvider = CartContext.Provider;
