import style from './CardDetails.module.scss';
import arrow from '../../../../assets/icons/arrow-back.svg';
import grandma from '../../../../assets/icons/grandma2.svg';
import CustomizedSwitches from './Components/IosSwitch';



export const CardDetails = ({setCardDetails}) => {
    return (
        <div className={style.cardDetails}>
            <img src={arrow} alt="arrow-back" className={style.arrow} onClick={() => setCardDetails(false)}/>
            <h1>СПОСОБ ОПЛАТЫ</h1>
            <form className={style.card}>
                <p>Введите номер карты</p>
                <input type="text" className={style.mainInput}/>
                <div className={style.cardInfo}>
                    <div className={style.validityPeriod}>
                        <p>Срок действия</p>
                        <div className={style.validityPeriodInput}>
                        <input type="text" />
                        <p>/</p>
                        <input type="text" />
                        </div>
                    </div>
                    <div className={style.cvv}>
                        <p>CVV</p>
                        <input type="text" />
                    </div>
                </div>
            </form>
            <div className={style.save}> 
            <p>Сохранить карту</p>
            <CustomizedSwitches/>
            </div>
           <div className={style.defaultCard}>
            <p>Сделать картой по умолчанию</p>
       <CustomizedSwitches/>
           </div>
            <button>ОПЛАТИТЬ</button>
            <img src={grandma} alt="grandma" className={style.grandma}/>
        </div>
    )
}