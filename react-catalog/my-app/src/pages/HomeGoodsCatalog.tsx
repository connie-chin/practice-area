import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { readHomeGoodsCatalog, type Product, toDollars } from '../lib';

export function HomeGoodsCatalog() {
  const [homeGoodProducts, setHomeGoodProducts] = useState<Product[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function loadHomeGoods() {
      try {
        const homeGoodProducts = await readHomeGoodsCatalog();
        setHomeGoodProducts(homeGoodProducts);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    setIsLoading(true);
    loadHomeGoods();
  }, []);

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
      <h2 className="clothingTitle">Home Goods Catalog</h2>
      <hr />
      <div className="row">
        {homeGoodProducts?.map((homeGoodProduct) => (
          <div key={homeGoodProduct.productId} className="column-third">
            <HomeGoodProductCard product={homeGoodProduct} />
          </div>
        ))}
      </div>
    </div>
  );

  type CardProps = {
    product: Product;
  };

  function HomeGoodProductCard({ product }: CardProps) {
    const { productId, name, price, imageUrl } = product;
    return (
      <Link to={`homeGoodDetails/${productId}`} className="product">
        <img src={imageUrl} alt={name} />
        <div className="card-body">
          <h5 className="description">{name}</h5>
          <p>{toDollars(price)}</p>
        </div>
      </Link>
    );
  }
}
