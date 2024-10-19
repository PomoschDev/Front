import style from './MainPayment.module.scss';
import { CardButton } from "../../CardButton/CardButton";
import icon1 from '../../../../assets/icons/sbp.svg';
import icon2 from '../../../../assets/icons/payment-card.svg';
import grandma from '../../../../assets/icons/grandma.svg';
import arrow from '../../../../assets/icons/arrow-back.svg';

export const MainPayment = ({setSbp, setVisible, setCardDetails}) => {
    return (
            <div>
                <img src={arrow} alt="arrow-back" className={style.arrow} onClick={() => setVisible(false)}/>
                <h1>СПОСОБ ОПЛАТЫ</h1>
                <div className={style.cardBtn}> 
                <CardButton 
                title={'СБП'} 
                icon={<img src={icon1} alt='sbp'/>}
                onClick={() => setSbp(true)}
                />
                <CardButton 
                title={'Добавить карту'}
                icon={<img src={icon2} alt='Card'/>}
                onClick={() => setCardDetails(true)}
                />
                </div>
                <h2>Ваши сохранённые карты</h2>
                <a href="https://example.com"> 
                    Ознакомьтесь с пользовательским соглашением,политикой <br />
                    конфиденциальности, обработкой персональных данных,<br /> 
                    правилами программы лояльности
                </a>
                <img src={grandma} alt="GrandMother" className={style.grandma} />
            </div>
    )
}