import React from 'react';
import style from './Distribution.module.scss';

const Distribution = ({value}) => {
  return (
    <div className={style.distribution}>
        <h2>Распределение средств</h2>
        <div >
             <p>Разовый сбор </p>
             <p>{value}</p>
        </div>
        <div >
             <p>Сопровождение (12%)</p>
             <p>{value * 0.12}</p>
        </div>
      </div>
  );
};

export default Distribution;