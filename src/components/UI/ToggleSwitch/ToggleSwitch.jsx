import s from './ToggleSwitch.module.scss';

const ToggleSwitch = () => {
  return (
    <>
      <input type="checkbox" id="switch" />
      <label for="switch">Toggle</label>
    </>
  );
};

export default ToggleSwitch;