import './Header.css';
import { Outlet, Link } from 'react-router-dom';

export function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow-sm">
        <div className="navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="title nav-item nav-link">
              <Link to="/about" className="title">
                About
              </Link>
            </li>
            <li className="nav-item nav-link">
              <Link to="/" className="title">
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* Page content goes here . outlet is pointing to the other 4 routes*/}
      <Outlet />
    </div>
  );
}
