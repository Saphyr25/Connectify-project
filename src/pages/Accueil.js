import React from 'react';
import Header from "../components/Header"
import Navigation from '../components/Navigation';
import "../styles/accueil.css";
import image from "../media/Actu.jpg"
import image2 from "../media/QNS.jpg"
import Footer from '../components/Footer';


const Accueil = () => {
    return (
        <div className='container'>
            <div className="Header scroll-area">
                < Navigation />
                <Header />
            </div>
            {/* ---------------------------------------- */}
            <div className="Bienvenue  scroll-area">
                <h1>Bienvenue</h1>
                <p>"Harmonisez vos passions,
                    partagez vos émotions avec
                    Connectify !"</p>
            </div>
            {/* ---------------------------------------------- */}
            <div className="Actu  scroll-area">
                <div className="Actu-word">
                    <h1>Actualitée</h1>
                    <p>Le lieu où vous pouvez vous connecter avec vos amis, partager des moments spéciaux et explorer de nouvelles rencontres.Exprimez-vous à travers des photos, des vidéos et des messages, et découvrez le monde passionnant de la communauté Connectify.Rejoignez-nous dès maintenant et commencez à créer des liens, à inspirer et à être inspiré. Connectify est là pour vous aider à rester connecté et à célébrer les moments de la vie, ensemble.</p>
                </div>
                <div className="Actu-picture">
                    <img src={image} alt="" />
                </div>
            </div>
            {/* --------------------------------------------- */}
            <div className="QNS  scroll-area">
                <div className="QNS-word">
                    <h1>Qui sommes nous ?</h1>
                    <p>Chez Connectify, nous sommes une plateforme sociale dynamique et inclusive, dédiée à connecter les individus du monde entier. Notre objectif est de créer un espace numérique où chacun peut se sentir libre d'exprimer sa véritable identité, de partager ses passions et de tisser des liens authentiques.</p>
                </div>
                <div className="QNS-picture">
                    <img src={image2} alt="" />
                </div>
            </div>
            {/* ------------------------------------- */}

            <div className="Contact scroll-area">
                <h1>Nous Contacter</h1>
                <form action="">
                    <label htmlFor="">Email : <br></br>
                        <input type="text" placeholder='Entrez votre email ...' />
                    </label>
                    <label htmlFor="">Sujet : <br></br>
                        <input type="text" placeholder='Sujet de votre message ...' />
                    </label>
                    <label htmlFor="">Message :<br></br>
                        <textarea name="" id="" cols="30" rows="10" placeholder='Ecrivez votre message'></textarea>
                    </label>
                    <button>Valider</button>
                </form>
            </div>
            {/* ------------------------------------------------ */}
            <div className="Newsletter scroll-area">
                <div className="News-form">
                    <h1>Newsletter</h1>
                    <p>Inscrivez-vous à notre newsletter
                        pour rester informé(e) et
                        connecté(e) avec Connectify !</p>
                    <input type="text" placeholder='Entrez votre email...'/>
                    <button>Valider</button>
                </div>
                <Footer />
            </div>

        </div>
    );
};

export default Accueil;