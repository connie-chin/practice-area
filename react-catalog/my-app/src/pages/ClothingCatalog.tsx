import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { readCatalog, type Product, toDollars } from '../lib';

export function ClothingCatalog() {
  const [clothingProducts, setClothingProducts] = useState<Product[]>(); // the value we are pulling is array of products
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function load() {
      try {
        const clothingProducts = await readCatalog();
        setClothingProducts(clothingProducts);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    setIsLoading(true);
    load();
  }, []); // dependency array to ensure useEffect only runs once

  if (isLoading) return <div>Loading...</div>;
  if (error)
    return (
      <div>
        Error loading Clothing Catalog:{' '}
        {error instanceof Error ? error.message : 'Unknown error'}
      </div>
    );

  return (
    <div className="container">
      <h2 className="clothingTitle">Clothing Catalog</h2>
      <hr />
      <div className="row">
        {clothingProducts?.map((clothingProduct) => (
          <div key={clothingProduct.productId} className="column-third">
            <ProductCard product={clothingProduct} />
          </div>
        ))}
      </div>
    </div>
  );
}

type CardProps = {
  product: Product;
};

function ProductCard({ product }: CardProps) {
  const { productId, name, price, imageUrl } = product;
  return (
    <Link to={`clothingDetails/${productId}`} className="product">
      <img src={imageUrl} alt={name} />
      <div className="card-body">
        <h5 className="description">{name}</h5>
        <p>{toDollars(price)}</p>
      </div>
    </Link>
  );
} // this builds the single product card on clothing catalog page
