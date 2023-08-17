import React from 'react';
import Navigation from '../components/Navigation';
import image from '../media/inscription.jpg'
import "../styles/inscription.css"
import Footer from '../components/Footer';

const Inscription = () => {
    return (
        <div>
            <Navigation/>
            <header className='headerInscription'>
                <img src={image} alt="" />
            </header>
            {/* ---------------------------- */}
            <div className="Inscription">
                <h1>Inscription</h1>
                <form action="">
                    <label htmlFor="">Nom : 
                        <input type="text" placeholder='Entrez votre nom ...' />
                    </label>
                    <label htmlFor="">Prénom : 
                        <input type="text" placeholder='Entrez votre prénom ...' />
                    </label>
                    <label htmlFor="">Email : 
                        <input type="text" placeholder='Entrez votre email ...' />
                    </label>
                    <label  htmlFor="">Genre : </label>
                    <div className="test"><input type="radio"  /> <p> Homme </p></div> 
                    <div className="test"> <input type="radio"  /><p> Femme</p></div>
                    
                    <label htmlFor="">Mot de passe : 
                    </label>
                        <input type="text" placeholder='Entrez votre mot de passe ...' />
                    
                    <label htmlFor="">Vérification du mot de passe : 
                    </label>
                        <input type="text" placeholder='Entrez votre email ...' />
                    
                    <button action="Navigation">Valider</button>
                </form>
                <p className='Inscription-p'>Déjà un compte ? <a className='a-Inscription' href="connexion">Connectez-vous</a></p>
                <Footer/>
            </div>
            
        </div>

    );
};

export default Inscription;