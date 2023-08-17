import React from 'react';
import "../styles/contact.css"
import image from "../media/contact.jpg"
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Contact = () => {
    return (
        <div>
                     <Navigation/>
            <header className='headerContact'>
                <img src={image} alt="" />
            </header>
            {/* ---------------------- */}
            <div className="Contact">
                <h1>Contact</h1>
                <form action="">
                    <label htmlFor="">Email : <br></br>
                        <input type="text" placeholder='Entrez votre email ...' />
                    </label>
                    <label htmlFor="">Mot de passe : <br></br>
                        <input type="text" placeholder='Entrez votre mot de passe ...' />
                    </label>
                    <label htmlFor="">Message : <br></br>
                        <textarea name="" id="" cols="30" rows="10" placeholder='Ecrivez votre message ...'></textarea>
                    </label>
                    <button>Valider</button>
                </form>
            </div>
            <Footer/>
        </div>
    );
};

export default Contact;