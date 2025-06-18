import '../Button/Button.css';

const Button = ({ text, primary, onClick, type = "button", disabled }) => {
  return (
    <button className={primary ? "button primary-button" : "button secondary-button"} onClick={onClick} type={type} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;