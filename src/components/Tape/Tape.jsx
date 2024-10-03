import Card from '../Card/Card';
import s from './Tape.module.scss';
import YandexMap from '../UI/YandexMap/YandexMap';

const Tape = () => {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <YandexMap />
    </div>
  );
};

export default Tape;