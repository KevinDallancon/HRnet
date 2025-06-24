# HRnet - Refonte React

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

- React 18 (via Vite)
- JavaScript (ES6+)
- React Router
- Vite (pour le build rapide et léger)
- Lighthouse (audit de performance)

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
  

### 📁 Structure du projet

- `src/` : Contient tous les composants React, les styles et la logique de l'application.
- `src/components/` : Composants React réutilisables (Modal, Datepicker, Dropdowns, Table).
- `src/pages/` : Pages principales de l'application (Create Employee, Employee List).
- `src/styles/` : Fichiers CSS pour le style global et les composants.
- `src/utils/` : Fonctions utilitaires et helpers.
- `src/hooks/` : Hooks personnalisés pour la logique réutilisable.

### ✅ Fonctionnalités implémentées

✅ Création d’un employé via formulaire

✅ Visualisation des employés enregistrés

✅ Gestion d’état avec Zustand

✅ Fenêtre modale réutilisable (custom React)

✅ Composants performants (datepicker, dropdown, table triable)

✅ Interface responsive et moderne


### 📊 Audits de performance

| Version              | Score Performance | Temps de chargement |
|----------------------|-------------------|----------------------|
| HRnet (jQuery)       | ~45               | ~3,2s                |
| HRnet (React + Vite) | ~95               | ~0,9s                |