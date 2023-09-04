import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Accueil from "./pages/Accueil"
import Connexion from "./pages/Connexion"
import Inscription from "./pages/SignUp"
import Contact from "./pages/Contact"
import Profile from "./pages/Profile"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Accueil" element={<Accueil />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} /> 
      </Routes>
    </BrowserRouter> 
  );
};

export default App;
