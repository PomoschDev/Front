import React from 'react';
import style from './SucPay.module.scss';
import kids from '../../../../assets/icons/kids.svg';

const SucCard = (props) => {
  return (
      <div className={style.cards}>
        <img src={props.list.img.src} alt={props.list.img.alt} /> 
        <h2>{props.list.title}</h2>
        <h3>{props.list.title2}</h3>
        <p><strong>{props.list.p}</strong></p>
        <button>{props.list.button}</button>
      </div>
  );
};

const cardsList = [
  {
    id: 0,
    title: 'Дети',
    title2: ' 12 сентября, 10:00 Ищем помощников ',
    img: {
      src: kids,
      alt: 'kids',
    },
    p: 'Провести мастер-классы для особенных детей',
    button: 'Я в деле',
  },
  {
    id: 1,
    title: 'Дети',
    title2: ' 12 сентября, 10:00 Ищем помощников ',
    img: {
      src: kids,
      alt: 'kids',
    },
    p: 'Провести мастер-классы для особенных детей',
    button: 'Я в деле',
  },
  {
    id: 2,
    title: 'Дети',
    title2: ' 12 сентября, 10:00 Ищем помощников ',
    img: {
      src: kids,
      alt: 'kids',
    },
    p: 'Провести мастер-классы для особенных детей',
    button: 'Я в деле',
  },
];

const SucCards = () => {
  return (
    <div  className={style.content}>
      {cardsList.map((list) => (
        <SucCard key={list.id} list={list} />
      ))}
    </div>
  );
};

export default SucCards;
