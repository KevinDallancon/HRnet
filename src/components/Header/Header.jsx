import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import '../Header/Header.css';
import Logo from '../Logo/Logo';

const Header = () => {

  const navigate = useNavigate();

  const handleCreateEmployeesClick = () => {
    navigate('/');
  };

  const handleListeEmployees = () => {
    navigate('/ListeEmployees');
  };

  return (
    <header className="header">
      <div className="header-container">
        <Logo />
        <div className="button-group">
          <Button text="Créer un employé" primary={true} onClick={handleCreateEmployeesClick} />
          <Button text="Liste des employés" primary={false} onClick={handleListeEmployees} />
        </div>
      </div>
    </header>
  );
};

export default Header;