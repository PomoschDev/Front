import s from "./CardPriceProgress.module.scss";
import Wallet from "../../../assets/icons/wallet.svg";

const CardPriceProgress = ({ children }) => {
  return (
    <div className={s["card-info"]}>
      <div className={s["card-date"]}>
        <img className={s["card-date__image"]} src={Wallet} alt={Wallet} />
        <p className={s["card-date__text"]}>Разовый сбор до 10 декабря</p>
      </div>
      <h2 className={s["card-title"]}>Средства для лечения Дианы</h2>
      <div className={s["card-price"]}>
        <span className={s["card-price__text"]}>Лекарства</span>
        <div className={s["card-progress"]}>
          <div className={s["card-progress__fill"]}></div>
        </div>
        <div className={s["card-price__value"]}>
          <span className={s["card-price__from"]}>148 900 ₽</span>
          <span className={s["card-price__before"]}>580 000 ₽</span>
        </div>
      </div>
      {children}
    </div>
  );
};

export default CardPriceProgress;