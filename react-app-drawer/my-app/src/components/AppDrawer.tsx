import { type MenuItem } from './Header';
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import './AppDrawer.css';

type Props = {
  menuItems: MenuItem[];
};
export function AppDrawer({ menuItems }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  function handleToggle() {
    setIsOpen(!isOpen);
    console.log('clicked');
  }
  return (
    <div className="container-app-drawer">
      <nav className={`navbar ${isOpen ? '' : 'closed'}`}>
        <div className="navbar-collapse">
          <FaBars className="bars" onClick={handleToggle} />
          <ul className="navbar-nav mr-auto">
            {isOpen && <h3>Hylian Shopping</h3>}
            {menuItems.map((menu) => (
              <li key={menu.name} className="nav-item nav-link">
                <Link to={menu.path} className="title">
                  <img className="icons" src={menu.iconUrl} />
                  {isOpen && <p>{menu.name}</p>}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div className="flex-grow-1"></div>
      <Outlet />
    </div>
  );
}
