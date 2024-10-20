import style from './PaymentPreview.module.scss';
import React from 'react';
import Modal from 'react-modal';
import arms from '../../assets/images/bgPayment.png';
import { Payment } from './Payment';

export const PaymentPreview = () => {

    let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(true);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }


    return (
      <>
        <div className={style.paymentPreview}>
          
            {/* <button onClick={openModal}>Open Modal</button> */}
            <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        className={style.customStyles}
        contentLabel="Example Modal"
            >
              <h1>Помогая проекту, вы можете отправить разовую 
                материальную поддержку или оформить подписку на регулярную 
                помощь нуждающимся. Наша задача — помочь закрыть корзину, 
                если срок её действия подходит к концу.
                <br/><br/><br/>
                  Свободные средства направляются в резервный фонд проекта. Эти средства могут быть использованы, например, для срочной помощи тем, кто нуждается в немедленной поддержке.</h1>
                <img src={arms} alt="arms" className={style.img} />
                <button onClick={closeModal}>ПОМОЧЬ ПРОЕКТУ</button>
      </Modal>
      
      {!modalIsOpen && <Payment/>}
        </div>
        </>
    )
}