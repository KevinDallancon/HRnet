import React from 'react';
import Form from '../../components/Form/Form';
import Header from '../../components/Header/Header';
import '../Home/Home.css';

const Home = () => {
  return (
    <div className="container">
    <Header />
    <h1>Bienvenue sur la page d'accueil</h1>
    <Form />
    </div>
  );
};

export default Home;