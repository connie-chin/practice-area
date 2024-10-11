import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { type Product, readHomeGoodProduct, toDollars } from '../lib';

export function HomeGoodProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [homeGoodProduct, setHomeGoodProduct] = useState<Product>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function loadHomeGoodProduct(productId: number) {
      try {
        const homeGoodProduct = await readHomeGoodProduct(productId);
        setHomeGoodProduct(homeGoodProduct);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    if (productId) {
      setIsLoading(true);
      loadHomeGoodProduct(+productId);
    }
  }, [productId]);

  function handleAddToCart() {
    alert(`Added ${homeGoodProduct?.name} to cart`);
    navigate('/homeGoods');
  }

  if (isLoading) return <div>Loading...</div>;
  if (error)
    return (
      <div>
        Error loading Home Goods Catalog:{' '}
        {error instanceof Error ? error.message : 'Unknown error'}
      </div>
    );

  if (!homeGoodProduct)
    return (
      <>
        <p>This item does not exist!</p>
        <Link to="/homeGoods">
          <p>Let's go back to shopping!</p>
        </Link>
      </>
    );

  const { name, imageUrl, price, shortDescription, longDescription } =
    homeGoodProduct;
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
