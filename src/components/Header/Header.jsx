import s from './Header.module.scss';

import logo from '../../assets/icons/logo.svg';

import Navbar from '../UI/Navbar/Navbar';
import UserPanel from '../UI/UserPanel/UserPanel';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.content}>
        <div className={s.logo}>
          <img src={logo} alt="logo" />
        </div>
        <Navbar />
        <UserPanel />
      </div>
    </header>
  );
};

export default Header;