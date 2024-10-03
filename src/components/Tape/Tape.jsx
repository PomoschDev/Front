import Card from '../Card/Card';
import s from './Tape.module.scss'

const Tape = () => {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <Card />
      </div>
    </div>
  );
};

export default Tape;