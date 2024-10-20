import React from 'react';
import style from './Compensate.module.scss';
import CustomizedSwitches from '../../../Components/CardDetails/Components/IosSwitch';


const Compensate = () => {
  return (
      <div className={style.compensate}>
        <h3>
          Компенсировать
          <br /> 
          сопровождение
          <div className={style.switch}>
          <CustomizedSwitches/>
          </div>
        </h3>
       <p>Я хочу компенсировать сопровождение <br />потребностей, чтобы введеная мной <br />сумма была полностью потрачена на <br />потребность.</p>
      </div>
  );
};

export default Compensate;