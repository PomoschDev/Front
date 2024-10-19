import React, { useEffect } from "react";
import s from "./YandexMap.module.scss";

const YandexMap = () => {
  useEffect(() => {
    // Подключение Яндекс.Карт API
    const script = document.createElement("script");
    script.src = `https://api-maps.yandex.ru/2.1/?apikey=f2fc26df-1986-4184-8c97-25d822da76c5&lang=ru_RU`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      const ymaps = window.ymaps;

      // Инициализация карты после загрузки API
      ymaps.ready(() => {
        const map = new ymaps.Map("map", {
          center: [55.76, 37.64], // Центр карты (Москва)
          zoom: 10,
        });

        // Добавление метки на карту
        const placemark = new ymaps.Placemark([55.76, 37.64], {
          balloonContent: "Это Москва!",
        });
        map.geoObjects.add(placemark);
      });
    };
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div id="map" style={{ width: "100%", height: "500px" }}></div>
  );
};

export default YandexMap;