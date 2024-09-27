import s from './UserPanel.module.scss'

import Help from '../../../assets/icons/business assistance.svg';
import Notification from '../../../assets/icons/notifications.svg';
import Profile from '../../../assets/icons/profile.svg';

const UserPanel = () => {
  return (
    <div className={s['user-panel']}>
      <img src={Help} alt={Help} />
      <img src={Notification} alt={Notification} />
      <img src={Profile} alt={Profile} />
    </div>
  );
};

export default UserPanel;