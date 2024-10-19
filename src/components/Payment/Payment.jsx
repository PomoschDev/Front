import { useState } from 'react';
import { MainPayment } from './Components/MainPayment/MainPayment';
import { Sbp } from './Components/SBP/Sbp';
import { CardDetails } from './Components/CardDetails/CardDetails';
import style from './Payment.module.scss';
import arrow from '../../assets/icons/arrow-back.svg';

export const Payment = () => {
    const [sbp, setSbp] = useState(false);
    const [cardDetails, setCardDetails] = useState(false);
    const [visible, setVisible] = useState(true);

    const classes = [style.modal];
    if(visible) {
        classes.push(style.active)
    };


    return (
        <div className={classes.join(' ')} onClick={() => setVisible(false)}>
            <div className={style.content} onClick={(e) => e.stopPropagation()}>
            {cardDetails ? (
                <CardDetails setCardDetails={setCardDetails} />
            ) : sbp ? (
                <Sbp setSbp={setSbp} />
            ) : (
                <MainPayment setSbp={setSbp} setVisible={setVisible} setCardDetails={setCardDetails} />
            )}
            </div>
        </div>
    ) 
}