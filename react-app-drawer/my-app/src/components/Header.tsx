import { Link, Outlet } from 'react-router-dom';
import './Header.css';
import { FaBars } from 'react-icons/fa';

export type MenuItem = {
  name: string;
  iconUrl: string;
  path: string;
};

type Props = {
  menuItems: MenuItem[];
};
export function Header({ menuItems }: Props) {
  return (
    <div className="d-flex flex-column vw-100">
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow-sm">
        <div className="navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li>{<FaBars />}</li>
            {menuItems.map((menu) => (
              <li key={menu.name} className="nav-item nav-link">
                <Link to={menu.path} className="title">
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div className="flex-grow-1">
        <Outlet />
      </div>
    </div>
  );
}
