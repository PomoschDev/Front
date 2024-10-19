import s from './HeroBanner.module.scss';


const HeroBanner = ({banner}) => {
  return (
    <div className={s.hero_banner__main}>
        <img src={banner} alt="banner" />
    </div>
  );
};

export default HeroBanner;