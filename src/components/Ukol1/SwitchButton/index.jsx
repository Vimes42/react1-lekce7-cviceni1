import './style.css';

export const SwitchButton = ({ label, onSwitch, on }) => {
  return (
    <button className={ on ? "switch-button switch-button--on" : "switch-button"} onClick={onSwitch} >
      <i className="switch-icon" />
      <div className="button-label">{label}</div>
    </button>
  );
};
