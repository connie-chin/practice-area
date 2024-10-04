import { useEffect, useState } from 'react';
import { type Item, readItem } from '../lib/read';
import './Details.css';
import { useParams, Link, useNavigate } from 'react-router-dom';

export function Details() {
  const { itemId } = useParams(); //allows us to access variables stores in url
  const navigate = useNavigate();
  const [item, setItem] = useState<Item>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function loadItem(itemId: number) {
      try {
        const item = await readItem(itemId);
        setItem(item);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    if (itemId) {
      setIsLoading(true);
      loadItem(+itemId);
    }
  }, [itemId]);

  function handleSave() {
    alert(`Saved ${item.name}!`);
    navigate('/');
  }

  if (isLoading) return <div>Loading...</div>;
  if (error || !item) {
    return (
      <div>
        Error Loading Item {itemId}:{' '}
        {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  }
  const { name, image, description } = item;
  return (
    <div className="container">
      <div className="card shadow-sm">
        <div className="card-body">
          <div className="row">
            <div className="col">
              <Link to="/" className="btn text-secondary">
                &lt; Back to Dashboard
              </Link>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-12 col-sm-6 col-md-5">
              <img src={image} alt={name} className="image" />
            </div>
            <div className="col-12 col-sm-6 col-md-7">
              <h2>{name}</h2>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p className="description">{description}</p>
            </div>
          </div>
        </div>
      </div>
      <button onClick={handleSave}>Save</button>
    </div>
  );
}
