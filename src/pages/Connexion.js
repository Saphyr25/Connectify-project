import React from 'react';
import Navigation from '../components/Navigation';
import image from "../media/Connexion.jpg"
import  "../styles/connexion.css"
import Footer from '../components/Footer';


const Connexion = () => {
    return (
        <div>
            <Navigation/>
            <header className='headerConnexion'>
                <img src={image} alt="" />
            </header>
            {/* ---------------------- */}
            <div className="Connexion">
                <h1>Connexion</h1>
                <form action="">
                    <label htmlFor="">Email : <br></br>
                        <input type="text" placeholder='Entrez votre email ...' />
                    </label>
                    <label htmlFor="">Mot de passe : <br></br>
                        <input type="text" placeholder='Entrez votre mot de passe ...' />
                    </label>
                    <button>Se Connecter</button>
                </form>
                <p>Pas de compte ? <a href='inscription' className='a-connexion'>Inscrivez-vous</a></p>
            </div>
            <Footer/>
        </div>
        
    );
};

export default Connexion;