import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { type Product, readProduct, toDollars } from '../lib';

export function ClothingProductDetails() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [clothingProduct, setClothingProduct] = useState<Product>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function loadClothingProduct(productId: number) {
      try {
        const clothingProduct = await readProduct(productId);
        setClothingProduct(clothingProduct);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    if (productId) {
      // we need a productId to set the item into state
      setIsLoading(true);
      loadClothingProduct(+productId);
    }
  }, [productId]);

  function handleAddToCart() {
    alert(`Added ${clothingProduct?.name} to cart`);
    navigate('/');
  }

  if (isLoading) return <div>Loading...</div>;
  if (error)
    return (
      <div>
        Error loading Clothing Catalog:{' '}
        {error instanceof Error ? error.message : 'Unknown error'}
      </div>
    );

  if (!clothingProduct)
    return (
      <>
        <p>This item does not exist!</p>
        <Link to="/">
          <p>Let's go back to shopping!</p>
        </Link>
      </>
    );

  const { name, imageUrl, price, shortDescription, longDescription } =
    clothingProduct;

  return (
    <div className="container">
      <div className="row">
        <div className="column-half">
          <img src={imageUrl} />
        </div>
        <div className="column-half">
          <p className="title">{name}</p>
          <p className="price">{toDollars(price)}</p>
          <p>{shortDescription}</p>
          <p>{longDescription}</p>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
