import style from './CardButton.module.scss';
import arrow from '../../../assets/icons/arrow-next.svg';

export const CardButton = ({ title, icon, onClick}) => {
    return (
        <button className={style.btn} onClick={onClick}>
            {icon}
            {title}
            <img src={arrow} alt="arrow" className={style.arrow} />
        </button>
    )
}