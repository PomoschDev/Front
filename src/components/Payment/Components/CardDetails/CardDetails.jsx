import React, { useState } from 'react';
import style from './CardDetails.module.scss';
import arrow from '../../../../assets/icons/arrow-back.svg';
import grandma from '../../../../assets/icons/grandma2.svg';
import CustomizedSwitches from './Components/IosSwitch';

export const CardDetails = ({ setCardDetails, setSbp, pay, setPay, setSuc, setError }) => {
    const [cardNumber, setCardNumber] = useState('');
    const [validityMonth, setValidityMonth] = useState('');
    const [validityYear, setValidityYear] = useState('');
    const [cvv, setCvv] = useState('');

  
    const handleCardNumberInput = (e) => {
        let value = e.target.value.replace(/\D/g, ''); 
        if (value.length > 16) value = value.slice(0, 16); 
        setCardNumber(value.replace(/(\d{4})(?=\d)/g, '$1 ')); 
    };

 
    const handleValidityMonthInput = (e) => {
        let value = e.target.value.replace(/\D/g, ''); 
        if (value.length > 2) value = value.slice(0, 2); 
        setValidityMonth(value);
    };

    const handleValidityYearInput = (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 2) value = value.slice(0, 2); 
        setValidityYear(value);
    };

    const handleCvvInput = (e) => {
        let value = e.target.value.replace(/\D/g, ''); 
        if (value.length > 3) value = value.slice(0, 3); 
        setCvv(value);
    };

    return (
        <div className={style.cardDetails}>
            <img
                src={arrow}
                alt="arrow-back"
                className={style.arrow}
                onClick={() => (setCardDetails(false), setSbp(true))}
            />
            <h1>СПОСОБ ОПЛАТЫ</h1>
            <form className={style.card} onSubmit={(e) => e.preventDefault()}>
                <p>Введите номер карты</p>
                <input
                    type="text"
                    className={style.mainInput}
                    value={cardNumber}
                    onChange={handleCardNumberInput}
                    placeholder="0000 0000 0000 0000"
                    maxLength="19" 
                />
                <div className={style.cardInfo}>
                    <div className={style.validityPeriod}>
                        <p>Срок действия</p>
                        <div className={style.validityPeriodInput}>
                            <input
                                type="text"
                                placeholder="MM"
                                value={validityMonth}
                                onChange={handleValidityMonthInput}
                                maxLength="2"
                            />
                            <p>/</p>
                            <input
                                type="text"
                                placeholder="YY"
                                value={validityYear}
                                onChange={handleValidityYearInput}
                                maxLength="2"
                            />
                        </div>
                    </div>
                    <div className={style.cvv}>
                        <p>CVV</p>
                        <input
                            type="text"
                            value={cvv}
                            onChange={handleCvvInput}
                            maxLength="3"
                            placeholder="XXX"
                        />
                    </div>
                </div>
            </form>
            <div className={style.save}>
                <p>Сохранить карту</p>
                <CustomizedSwitches />
            </div>
            <div className={style.defaultCard}>
                <p>Сделать картой по умолчанию</p>
                <CustomizedSwitches />
            </div>
            <button
                onClick={() => {
                    if (pay) {
                        setCardDetails(false);
                        setSuc(true);
                       'Card Data:', { cardNumber, validityMonth, validityYear, cvv };
                    } else {
                        setCardDetails(false);
                        setError(true);
                    }
                }}
            >
                ОПЛАТИТЬ
            </button>
            <img src={grandma} alt="grandma" className={style.grandma} />
        </div>
    );
};
