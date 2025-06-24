<p align="center">
  <img src="./src/assets/logo.png" alt="Logo HRnet" width="200"/>
</p>


# HRnet

Refonte complète de l’application RH interne de WealthHealth, initialement construite en jQuery. 

## 📦 Objectifs du projet

- Convertir l’application HRnet existante en une app 100% React (Create Employee / Employee List)
- Remplacer les anciens plugins jQuery par des composants React :
  - ✅ Modal (développée et publiée en tant que package)
  - ✅ Datepicker (React)
  - ✅ Dropdowns (React)
  - ✅ Table de données (React)
- Améliorer les performances (Lighthouse audits)
- Publier les composants développés sous forme de package (npm ou GitHub)
- Documenter et modulariser le code selon une approche fonctionnelle

## ⚙️ Technologies utilisées

- **React 19** – Bibliothèque principale pour l’interface utilisateur
- **Vite** – Outil de build rapide pour développement moderne
- **Redux Toolkit** – Gestion d’état centralisée
- **React Router DOM** – Navigation entre les pages
- **TanStack Table v8** – Affichage de tableaux dynamiques
- **React Redux** – Liaison entre Redux et les composants React
- **@kevindallancon/hrnet-modal** – Composant modale réutilisable publié sur npm

## 🚀 Installation
1. Clonez le dépôt :
   ```bash
   git clone https://github.com/KevinDallancon/HRnet.git

2. Installez les dépendances :
   ```bash
   npm install
   ```
3. Démarrez le serveur de développement :
   ```bash
   npm run dev
   ```
  

## 📁 Structure du projet

```bash
src/
├── assets/                # Fichiers statiques (images, icônes, etc.)
│   └── logo.png
├── components/            # Composants réutilisables
│   ├── Button/
│   ├── Form/
│   ├── Header/
│   ├── Logo/
│   └── Modal/
├── data/                  # Données statiques (JSON, constantes)
│   ├── departments.js
│   ├── fakeEmployee.json
│   └── states.js
├── pages/                 # Pages principales de l'application
│   ├── Error404/
│   ├── Home/
│   └── ListeEmployees/
├── Redux/                 # Structure Redux (store et slices)
│   ├── Slices/
│   │   └── employeeSlice.js
│   └── Store/
│       └── store.js
├── App.jsx                # Composant racine
├── index.css              # Styles globaux
├── main.jsx               # Point d’entrée de l’application


### ✅ Fonctionnalités implémentées

✅ Création d’un employé via formulaire

✅ Visualisation des employés enregistrés

✅ Gestion d’état avec Redux Toolkit

✅ Fenêtre modale réutilisable (custom React)


✅ Interface responsive et moderne


### 📊 Audits de performance

| Version              | Score Performance | Temps de chargement |
|----------------------|-------------------|----------------------|
| HRnet (jQuery)       | à renseinger                |  à renseinger                |
| HRnet (React + Vite) | à renseinger               |  à renseinger              |