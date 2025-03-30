import { ShoppingCartItem, CartProvider } from './components/CartContext';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { About } from './pages/About';
import { Catalog } from './pages/Catalog';
import { NotFound } from './pages/NotFound';
import { ProductDetails } from './pages/ProductDetails';
import { Product } from './lib';

export function App() {
  const [cart, setCart] = useState<ShoppingCartItem[]>([]);

  function addToCart(product: Product, quantity: number): void {
    const item = { product, quantity };
    setCart([...cart, item]); //spread operator to add item to array
  }

  const cartContextValues = { cart, addToCart };

  return (
    <CartProvider value={cartContextValues}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Catalog />} />
          <Route path="details/:productId" element={<ProductDetails />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </CartProvider>
  );
}
