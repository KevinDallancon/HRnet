import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error404 from '../src/pages/Error404/Error404.jsx';
import Home from '../src/pages/Home/Home.jsx';
import ListEmployees from './pages/ListeEmployees/ListeEmployees.jsx';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="*" element={<Error404 />} />
    <Route path="/ListeEmployees" element={<ListEmployees />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App