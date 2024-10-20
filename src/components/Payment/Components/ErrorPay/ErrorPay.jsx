import React from 'react';
import errorSvg from '../../../../assets/icons/errorGrandMa.svg';
import Modal from 'react-modal';
import style from './ErrorPay.module.scss';


const ErrorPay = ({setOneTimeTransfer}) => {

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(true);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
   
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
    setOneTimeTransfer(true)
  }
  return (
    
    <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        className={style.customStyles}
    >
        <h1>Ой! <br /> Что-то пошло не так...</h1>
      <img src={errorSvg} alt="error" />
      <button onClick={closeModal}>ПОПРОБОВАТЬ СНОВА</button>
    </Modal>
  );
};

export default ErrorPay;