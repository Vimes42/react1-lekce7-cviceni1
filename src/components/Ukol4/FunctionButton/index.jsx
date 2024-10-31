import './style.css';

export const FunctionButton = ({ label, onFunctionClick }) => {
  return (
    <button className="numpad-button" onClick={_ => onFunctionClick()}>{label}</button>
  );
};
