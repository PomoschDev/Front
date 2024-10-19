import React from 'react';
import s from './DescriptionBlock.module.scss';


const DescriptionBlock = ({ image1, image2, header, texts }) => {
  return (
    <>
      <div className={s.images}>
        <img src={image1} alt="Изображение 3" />
        <img src={image2} alt="Изображение 4" />
      </div>
      {header && <h2 className={header.classname}>{header.text}</h2>}
      <div className={s.text}>
        {texts && texts.map((text, index) => 
          <p key={index}>{text}</p>
        )}
      </div>
    </>
  );
};

export default DescriptionBlock;