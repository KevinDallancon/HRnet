import '../Button/Button.css';

const Button = ({ text, primary, onClick }) => {
  return (
    <button className={primary ? "button primary-button" : "button secondary-button"} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;