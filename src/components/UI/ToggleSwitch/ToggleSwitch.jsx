import s from './ToggleSwitch.module.scss';

const ToggleSwitch = () => {
  return (
    <div className={s.toggleSwitch}>
      <input type="checkbox" id="switch" />
      <label htmlFor="switch">Toggle</label>
    </div>
  );
};

export default ToggleSwitch;