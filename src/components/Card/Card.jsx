import s from "./Card.module.scss";

import Button from "../UI/Button/Button";


import CardImageInfo from '../UI/CardImageInfo/CardImageInfo';
import CardPriceProgress from '../UI/CardPriceProgress/CardPriceProgress';

const Card = () => {
  return (
    <div className={s.cards}>
      <div className={s.card}>
        <CardImageInfo />
        <CardPriceProgress>
          <Button className={s["card-button"]}>Помочь</Button>
        </CardPriceProgress>
      </div>
    </div>
  );
};

export default Card;
