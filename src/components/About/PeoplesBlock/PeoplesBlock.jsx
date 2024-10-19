import React, { useRef, useState, useEffect } from 'react';
import s from './PeoplesBlock.module.scss';


const PeoplesBlock = ({ text, images }) => {
  const sliderRef = useRef(null);                       // для хранения ссылки на DOM-элемент контейнера слайдера
  const [isDragging, setIsDragging] = useState(false);  // для отслеживания перетаскивания
  const [startPos, setStartPos] = useState(0);          // начальную позицию мыши (по оси X) в момент нажатия на слайдер
  const [currentPos, setCurrentPos] = useState(0);      // Текущая позиция сдвига
  const [prevPos, setPrevPos] = useState(0);            // предыдущее смещение слайдера до начала нового перетаскивания
  const [autoScroll, setAutoScroll] = useState(true);   // Включение/выключение автопрокрутки
  const [cardWidth, setCardWidth] = useState(0);        // Ширина одной карточки
  const [maxTranslate, setMaxTranslate] = useState(0);  // Максимальный сдвиг слайдера

  // Вычисляем ширину карточки и максимальный сдвиг
  useEffect(() => {
    const cardWith11 = sliderRef.current.querySelector(`.${s.people_card}`).offsetWidth;
    setCardWidth(cardWith11);

    const visibleCardsCount = 4; // Сколько карточек помещается в видимую область
    const totalWidth = cardWith11 * (images.length); // Общая ширина всех карточек
    const maxTranslateValue = - (totalWidth - visibleCardsCount * cardWith11);
    setMaxTranslate(maxTranslateValue);

  }, [images]); // Пересчитываем при изменении массива изображений


  // Начало перетаскивания
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartPos(e.pageX); // Сохраняем начальную позицию при нажатии
    setAutoScroll(false); // Отключаем автоматическую прокрутку при взаимодействии пользователя
  };

  // Обработка движения мыши (перетаскивание)
  const handleMouseMove = (e) => {
    if (!isDragging) return; // Если не перетаскивается, не двигаем
    sliderRef.current.style.transition = ''; // Убираем плавность при перетаскивании

    // Ограничение движения слайдера: блокируем при движении вправо при крайнем левом положении и наоборот
    let newTranslate = prevPos + (e.pageX - startPos);
    if (newTranslate > 0 || newTranslate < maxTranslate) {return}

    const newPos = prevPos + e.pageX - startPos;

    setCurrentPos(newPos);
  };

  // Окончание перетаскивания
  const handleMouseUp = () => {
    setIsDragging(false);
    if (!sliderRef.current.style.transition) {sliderRef.current.style.transition = 'transform 0.3s ease-in-out';}
    
    // определяем ближайшую пропорциональную позицию и перемещаем туда
    const closestMinPos = Math.floor(currentPos / cardWidth) * cardWidth;
    const propPos = (currentPos <= (closestMinPos + cardWidth/2)) ? closestMinPos : closestMinPos + cardWidth
    
    setCurrentPos(propPos)
    setPrevPos(propPos)
    setAutoScroll(true);
  };

  // Обновление позиции слайдера
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(${currentPos}px)`;
    }
  }, [currentPos]);

  // Автоматическая прокрутка
  useEffect(() => {
    if (autoScroll) {
      if (!sliderRef.current.style.transition) {sliderRef.current.style.transition = 'transform 0.3s ease-in-out';}
      const interval = setInterval(() => {
        let newTranslate = currentPos - cardWidth; // Прокручиваем на 1 карточку вправо
        if (newTranslate < maxTranslate) {
          newTranslate = 0; // Возвращаемся к началу, если дошли до конца
        }
        setCurrentPos(newTranslate);
        setPrevPos(newTranslate);
      }, 3000); // 3 секунды

      return () => clearInterval(interval); // Очищаем интервал при размонтировании
    }
  }, [autoScroll, currentPos, maxTranslate, cardWidth]);


  return (
    <div className={s.peoples}>
      <p className={s.text}>{text}</p>

      {images && 
        <div className={s.images_wrapper}>
          <div 
            className={s.images}
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {images.map(({src, name}, index) => 
              <div key={index} className={s.people_card}>
                <img src={src} alt="" onDragStart={(e) => e.preventDefault()} />
                <p>{name}</p>
              </div>
            )}
          </div>
        </div>
        
      }
    </div>
  );
};

export default PeoplesBlock;