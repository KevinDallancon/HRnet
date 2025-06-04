import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addEmployee } from '../../Redux/Slices/employeeSlice';
import { states } from '../../data/states';
import { departments } from '../../data/departments';
import '../Form/Form.css';
import Modal from '../Modal/Modal';

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
        <div>
          <div>
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
          
          <div>
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
          
          <div>
            <label htmlFor="dateOfBirth">Date de naissance</label>
            <input 
              id="dateOfBirth"
              name="dateOfBirth"
              type="date"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
            />
          </div>
          
          <div>
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
        
        <fieldset>
          <legend>Adresse</legend>
          
          <div>
            <div>
              <label htmlFor="street">Rue</label>
              <input 
                id="street"
                name="street"
                type="text"
                value={formData.street}
                onChange={handleInputChange}
              />
            </div>
            
            <div>
              <label htmlFor="city">Ville</label>
              <input 
                id="city"
                name="city"
                type="text"
                value={formData.city}
                onChange={handleInputChange}
              />
            </div>
            
            <div>
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
            
            <div>
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
        
        <div>
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
        
        <div>
          <button type="submit">Enregistrer</button>
        </div>
      <button type="button" onClick={() => setIsModalOpen(true)}>
          TEST MODAL
      </button>
      </form>
      <Modal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      title={modalTitle}
      content={modalContent}
      />
    </>
  );
};

export default Form;