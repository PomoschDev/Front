import ToggleSwitch from '../UI/ToggleSwitch/ToggleSwitch';
import FilterButtons from '../UI/FilterButtons/FilterButtons';

import s from './Filter.module.scss';

import Urgently from '../../assets/icons/urgently.svg';

const Filter = () => {
  return (
    <div className={s.content}>
      <div className={s.urgent}>
        <div className={s['urgent-content']}>
          <img className={s['urgent-icon']} src={Urgently} alt={Urgently} />
          <p className={s['urgent-text']}>Срочно</p>
        </div>
        <ToggleSwitch />
      </div>
      <FilterButtons />
    </div>
  );
};

export default Filter;