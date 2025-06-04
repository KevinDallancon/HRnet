import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;


  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content"  onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <h2>{title}</h2>
        <div className="modal-body">
           <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;