import React from 'react';
import style from '../../OneTimeTransfer.module.scss';

const Compensate = ({ value, setValue }) => {
  // Обработчик ввода для инпута (только числа)
  const handleInputChange = (e) => {
    let inputValue = e.target.value;

    // Удаляем любые символы, кроме цифр
    inputValue = inputValue.replace(/\D/g, '');

    // Преобразуем в число и обновляем состояние
    setValue(Number(inputValue));
  };

  return (
    <form className={style.payForm}>
      <input 
        type='text' 
        value={value} 
        onChange={handleInputChange} 
        placeholder="Введите сумму"
      />
      <div className={style.formButtons}>  
        <button type='button'>Закрыть сбор</button>
        <button onClick={() => setValue(value + 1000)} type='button'>1000</button>
        <button onClick={() => setValue(value + 500)} type='button'>500</button>
        <button onClick={() => setValue(value + 350)} type='button'>350</button>
      </div>
    </form>
  );
};

export default Compensate;
