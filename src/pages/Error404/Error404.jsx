import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <>
      <p>Erreur 404</p>
      <Link to="/">Retour à la page d'accueil</Link>
    </>
  );
};

export default Error404;