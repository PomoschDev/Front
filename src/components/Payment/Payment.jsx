import { useState } from 'react';
import { MainPayment } from './Components/MainPayment/MainPayment';
import { Sbp } from './Components/SBP/Sbp';
import { CardDetails } from './Components/CardDetails/CardDetails';
import style from './Payment.module.scss';
import arrow from '../../assets/icons/arrow-back.svg';
import Subscribe from './SubOrPay/Subscribe';
import OneTimeTransfer from './SubOrPay/OneTimeTransfer';
import ErrorPay from './Components/ErrorPay/ErrorPay';
import SucPay from './Components/SucPay/SucPay';


export const Payment = () => {
    const [sbp, setSbp] = useState(false);
    const [cardDetails, setCardDetails] = useState(false);
    const [sub, setSub] = useState(false);
    const [oneTimeTransfer, setOneTimeTransfer] = useState(true);
    const [visible, setVisible] = useState(true);
    const [pay, setPay] = useState(true);
    const [error, setError] = useState(false);
    const [suc, setSuc] = useState(false);
    

    const classes = [style.modal];
    if(visible) {
        classes.push(style.active)
    };


    return (
        <div className={classes.join(' ')} onClick={() => setVisible(false)}>
            <div className={style.content} onClick={(e) => e.stopPropagation()}>
                {/* <MainPayment setSbp={setSbp} setVisible={setVisible} setCardDetails={setCardDetails} /> */}

                {oneTimeTransfer
                ? (<OneTimeTransfer setOneTimeTransfer={setOneTimeTransfer} setSub={setSub} setSbp={setSbp} setVisible={setVisible}/>)
                : sub ? <Subscribe setOneTimeTransfer={setOneTimeTransfer} setSub={setSub} setSbp={setSbp} setVisible={setVisible}/>
                : sbp ? <Sbp setOneTimeTransfer={setOneTimeTransfer} setSub={setSub} setSbp={setSbp} setCardDetails={setCardDetails}/>
                : cardDetails ? <CardDetails setCardDetails={setCardDetails} setSbp={setSbp} pay={pay} setPay={setPay} setError={setError} setSuc={setSuc}/>
                : suc ? <SucPay setSuc={setSuc} setVisible={setVisible}/>
                : error ? <ErrorPay pay={pay} setPay={setPay} setOneTimeTransfer={setOneTimeTransfer}/>
                : null
                }

            </div>
        </div>
    ) 
}