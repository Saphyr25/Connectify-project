import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom"; 
import Accueil from "./pages/Accueil"
import Connexion from "./pages/Connexion"
import Inscription from "./pages/Inscription"
import Contact from "./pages/Contact"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
