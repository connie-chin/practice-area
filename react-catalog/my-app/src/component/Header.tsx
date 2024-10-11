import { Link, Outlet } from 'react-router-dom';

export function Header() {
  return (
    <div className="header">
      <h1>Hazey Daze Vintage</h1>
      <div className="secondLine">
        <Link to="/homeGoods">
          <h2>Home Goods</h2>
        </Link>
        <Link to="/">
          <h2>Clothing</h2>
        </Link>
      </div>
      <hr />
      <Outlet />
    </div>
  );
}
