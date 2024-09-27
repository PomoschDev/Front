import s from './Navbar.module.scss';

import { navbarArray } from '../../../data/Navbar.js';

const Navbar = () => {
  return (
    <nav className={s.navbar}>
      <ul className={s.list}>
        {navbarArray.map(nav => (
          <li key={nav.id} className={s.item}>
            <a
              className={s.link}
              href={nav.path}
            >
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;