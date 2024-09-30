import s from './FilterButtons.module.scss';

import { useState } from 'react';

import Category from '../../../assets/icons/category.svg';
import ArrowDropDown from '../../../assets/icons/arrow-dropDown.svg';
import LoveHelping from '../../../assets/icons/i-helping.svg';
import LocationMap from '../../../assets/icons/location map.svg';
import Close from '../../../assets/icons/close.svg';


const FilterButtons = () => {
  const [filter, setFilter] = useState([
    { id: 1, name: 'Категория', icon: Category, arrow: ArrowDropDown },
    { id: 2, name: 'Я помогаю', icon: LoveHelping, arrow: ArrowDropDown },
    { id: 3, name: 'Москва', icon: LocationMap, arrow: Close },
  ]);

  return (
    <>
      <div className={s.filter}>
        {filter.map(i => (
          <button key={i.id} className={s['filter-button']}>
            <div className={s['filter-text']}>
              <img src={i.icon} alt={i.name} />
              {i.name}
            </div>
            <img src={i.arrow} alt={i.arrow} />
          </button>
        ))}
        <button type="submit" className={s['filter-button--search']}>
          Найти
        </button>
      </div>
    </>
  );
};

export default FilterButtons;