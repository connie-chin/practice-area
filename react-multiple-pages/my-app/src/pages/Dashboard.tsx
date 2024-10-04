import './Dashboard.css';
import { useEffect, useState } from 'react';
import { type Item, readItems } from '../lib/read';
import { Link } from 'react-router-dom';

export function Dashboard() {
  const [items, setItems] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function loadItems() {
      try {
        const values = await readItems();
        setItems(values);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    loadItems();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error! {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Dashboard</h1>
      <hr />
      <div className="row">
        {items?.map((item) => (
          <div key={item.itemId} className="col-12 col-md-6 col-lg-4">
            <ItemCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

type CardProps = {
  item: Item;
};
function ItemCard({ item }: CardProps) {
  const { itemId, name } = item;
  return (
    <Link
      to={`/details/${itemId}`}
      className="item card-body text-dark card mb-4 shadow-sm text-decoration-none">
      <h5 className="card-title">{name}</h5>
    </Link>
  );
}
