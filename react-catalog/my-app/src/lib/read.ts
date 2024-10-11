import { products, homeProducts, type Product } from './data';

export function readCatalog(): Promise<Product[]> {
  return Promise.resolve(products);
}

export function readProduct(productId: number): Promise<Product | undefined> {
  return Promise.resolve(products.find((p) => p.productId === productId));
}

export function readHomeGoodsCatalog(): Promise<Product[]> {
  return Promise.resolve(homeProducts);
}

export function readHomeGoodProduct(
  productId: number,
): Promise<Product | undefined> {
  return Promise.resolve(homeProducts.find((hp) => hp.productId === productId));
}
