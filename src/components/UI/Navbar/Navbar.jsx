import s from './Navbar.module.scss';
import cn from 'classnames';

import { navbarArray } from '../../../data/Navbar.js';
import { Link, useLocation } from 'react-router-dom';


const Navbar = () => {
  const location = useLocation();

  return (
    <nav className={s.navbar}>
      <ul className={s.list}>
        {navbarArray.map(nav => (
          <li key={nav.id} className={s.item}>
            <Link
              to={nav.path}
              className={cn(s.link,
                { [s.active]: location.pathname === nav.path })}
              href={nav.path}
            >
              {nav.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;