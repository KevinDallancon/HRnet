import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addEmployee } from '../../Redux/Slices/employeeSlice';
import { departments } from '../../data/departments';
import { states } from '../../data/states';
import Button from '../Button/Button';
import '../Form/Form.css';
import Modal from '@kevindallancon/hrnet-modal';
// import Modal from '../Modal/Modal';

const Form = () => {

  const dispatch = useDispatch();

  const employees = useSelector(state => state.employees);
  console.log('Employés dans Redux:', employees);

  // State pour la modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalContent, setModalContent] = useState('');
  
  // State pour tous les champs du formulaire
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    startDate: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    department: ''
  });
      

  // Fonction pour gérer les changements dans les inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Fonction pour soumettre le formulaire
  const handleSubmit = (e) => {
  e.preventDefault();
  

  if (!formData.firstName || !formData.lastName) {
    // Modal d'erreur
    setModalTitle('Erreur');
    setModalContent('Prénom et nom sont requis');
    setIsModalOpen(true);
    return;
  }

  dispatch(addEmployee(formData));
  
  // Réinitialiser le formulaire
  setFormData({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    startDate: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    department: ''
  });

  // Modal de succès
  setModalTitle('Succès');
  setModalContent(`Employé ${formData.firstName} ${formData.lastName} créé avec succès !`);
  setIsModalOpen(true);
}
  return (
    <>
<form onSubmit={handleSubmit} id="create-employee">
      
      {/* Section informations personnelles */}
      <section className="form-section personal-info">
        <h3 className="section-title">Informations personnelles</h3>
        <div className="form-grid">
          <div className="form-field">
            <label htmlFor="firstName">Prénom</label>
            <input 
              type="text" 
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-field">
            <label htmlFor="lastName">Nom</label>
            <input 
              type="text" 
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-field">
            <label htmlFor="dateOfBirth">Date de naissance</label>
            <input 
              id="dateOfBirth"
              name="dateOfBirth"
              type="date"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="form-field">
            <label htmlFor="startDate">Date de début</label>
            <input 
              id="startDate"
              name="startDate"
              type="date"
              value={formData.startDate}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </section>
      
      {/* Section adresse */}
      <section className="form-section address-section">
        <fieldset>
          <legend>Adresse</legend>
          <div className="form-grid">
            <div className="form-field">
              <label htmlFor="street">Rue</label>
              <input 
                id="street"
                name="street"
                type="text"
                value={formData.street}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="form-field">
              <label htmlFor="city">Ville</label>
              <input 
                id="city"
                name="city"
                type="text"
                value={formData.city}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="form-field">
              <label htmlFor="state">État</label>
              <select 
                name="state" 
                id="state"
                value={formData.state}
                onChange={handleInputChange}
              >
                <option value="">Sélectionnez un état</option>
                {states.map(state => (
                  <option key={state.abbreviation} value={state.abbreviation}>
                    {state.name}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="form-field">
              <label htmlFor="zipCode">Code postal</label>
              <input 
                id="zipCode"
                name="zipCode"
                type="text"
                value={formData.zipCode}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </fieldset>
      </section>
      
      {/* Section travail */}
      <section className="form-section work-info">
        <h3 className="section-title">Informations professionnelles</h3>
        <div className="form-field">
          <label htmlFor="department">Département</label>
          <select 
            name="department" 
            id="department"
            value={formData.department}
            onChange={handleInputChange}
          >
            <option value="">Sélectionnez un département</option>
            {departments.map(department => (
              <option key={department} value={department}>
                {department}
              </option>
            ))}
          </select>
        </div>
      </section>
      
      {/* Section actions */}
      <footer className="form-actions">
        <Button 
          text="Enregistrer" 
          primary={true}
          type="submit"
        />
      </footer>
      
    </form>
      <Modal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      title={modalTitle}
      content={modalContent}
      backgroundColor="#6c7734"
      />
    </>
  );
};

export default Form;