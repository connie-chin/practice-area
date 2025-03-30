import { useContext } from 'react';
import { CartContext, CartContextValues } from './CartContext';
//this page makes it so dont need to import ^^ everywhere we use. just import this component;

export function useCart(): CartContextValues {
  const values = useContext(CartContext);
  if (!values)
    throw new Error('useCart can only be used inside a CartProvider');
  return values;
}
