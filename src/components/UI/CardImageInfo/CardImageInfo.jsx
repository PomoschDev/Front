import s from './CardImageInfo.module.scss';

import ImageChildren from "../../../assets/images/image.png";
import LocationMarker from "../../../assets/icons/location marker.svg";
import NoLike from "../../../assets/icons/no-like.svg";
import Like from "../../../assets/icons/like.svg";

const CardImageInfo = () => {
  return (
    <div className={s["card-image__content"]}>
      <img
        className={s["card-image"]}
        src={ImageChildren}
        alt={ImageChildren}
      />
      <img className={s["card-noLike"]} src={NoLike} alt={NoLike} />
      <div className={s["card-marker"]}>
        <img
          className={s["card-marker__image"]}
          src={LocationMarker}
          alt={LocationMarker}
        />
        <span className={s["card-marker__text"]}>Москва и МО</span>
      </div>
      <div className={s["card-category"]}>
        <span className={s["card-category__text"]}>Дети</span>
      </div>
    </div>
  );
};

export default CardImageInfo;