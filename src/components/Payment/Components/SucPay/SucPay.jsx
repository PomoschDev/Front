import React from 'react';
import style from './SucPay.module.scss';
import Modal from 'react-modal';
import SucCards from './SucCards';


const SucPay = ({setSuc, setVisible}) => {

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
  }


  return (
    <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        className={style.customStyles}
    >
      <h1>От всей команды «ПОМОЩЬ» <br />мы благодарим Вас за помощь</h1>
      <SucCards/>
      <p>Посмотри на эти дела и истории, возможно,<br /> они тебе тоже откликнутся.</p>
      <button className={style.closeButton} onClick={() => (setSuc(false), setVisible(false))}>ЗАКРЫТЬ</button>
    </Modal>
  );
};

export default SucPay;