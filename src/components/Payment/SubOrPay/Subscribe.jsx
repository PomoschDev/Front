import React from 'react';
import arrow from '../../../assets/icons/arrow-back.svg';
import style from './Sub.module.scss';
import { useState } from 'react';
import sbp1 from '../../../assets/icons/sbp.svg'
import PayForm from './Components/PayForm/PayForm';
import Compensate from './Components/Compensate/Compensate';
import Distribution from './Components/Distribution/Distribution';



const Subscribe = ({setOneTimeTransfer, setSbp, setSub, setVisible}) => {
    const [value,setValue] = useState(0);

  return (
    <div className={style.subscribe}>
      <img src={arrow} alt="arrow-back" onClick={() => setVisible(false)}/>
      <div className={style.subOrPay}>
        <p onClick={() => setOneTimeTransfer(true)}>Разовый перевод</p>
        <p>Подписка</p>
      </div>
      <div style={{display: 'flex', alignItems: 'center', gap: '100px'}}>
      <PayForm value={value} setValue={setValue}/>
      <Distribution  value={value}/>
      </div>
      <div style={{display: 'flex', alignItems: 'center', gap: '100px'}}>
        <div style={{width: '656px'}}>
      <h1>Способ оплаты</h1>
      <div className={style.cardsButton}>
        <button>
          <img src={sbp1} alt="sbp" /> 
        <p>СБП</p>
        </button>
        <button>
            <p>+</p>
            Новая карта
        </button>
      </div>
      <button className={style.payButton} onClick={() => (setOneTimeTransfer(false), setSbp(true), setSub(false))}>ПОДПИСАТЬСЯ</button>
      </div>
      <Compensate/>
      </div>
    </div>
  );
};

export default Subscribe;