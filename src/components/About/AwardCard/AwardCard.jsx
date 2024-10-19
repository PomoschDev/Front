import React from 'react';
import s from './AwardCard.module.scss';
import border from '../../../assets/images/about/award_border.png'

const AwardCard = ({ title, description }) => {
  return (
    <div className={s.award}>
      <img className={s.top_border} src={border} alt="" />
      <h3>{title}</h3>
      <p>{description}</p>
      <img className={s.bottom_border} src={border} alt="" />
    </div>
  );
};

export default AwardCard;