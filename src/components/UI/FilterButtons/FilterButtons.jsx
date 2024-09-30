import s from './FilterButtons.module.scss';

import { useState } from 'react';

import Category from '../../../assets/icons/category.svg';
import ArrowDropDown from '../../../assets/icons/arrow-dropDown.svg';
import LoveHelping from '../../../assets/icons/i-helping.svg';
import LocationMap from '../../../assets/icons/location map.svg';


const FilterButtons = () => {
  const [filter, setFilter] = useState([
    {id: 1, name: 'Категория', icon: Category},
    {id: 2, name: 'Я помогаю', icon: LoveHelping},
    {id: 3, name: 'Москва', icon: LocationMap},
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
            <img src={ArrowDropDown} alt={ArrowDropDown} />
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