import style from './sbp.module.scss';
import sbpIcon from '../../../../assets/icons/sbpIcon.svg';
import search from '../../../../assets/icons/searchIcon.svg';
import BankList from './Components/BankList';
import arrow from '../../../../assets/icons/arrow-back.svg'

export const Sbp = ({ setSbp }) => {
    return (
        <div className={style.sbp}>
            <img src={arrow} alt="arrow-back" className={style.arrow} onClick={() => setSbp(false)}/>
            <img src={sbpIcon} alt="sbpIcon" className={style.sbpIcon}/>
            <h1>Выберите банк для оплаты</h1>
            <div className={style.inputContainer}>
            <input placeholder='Введите название банка' />
            <img src={search} alt="searchIcon" className={style.searchIcon}/>
            <BankList/>
            </div>
        </div>
    )
}