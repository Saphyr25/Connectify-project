import React, {  useRef, useState, useContext, useEffect } from 'react';
import Navigation from '../components/Navigation';
import image from '../media/inscription.jpg';
import "../styles/inscription.css";
import Footer from '../components/Footer';
import { addDoc, collection, getDocs, updateDoc, doc } from 'firebase/firestore';
import { db } from "../firebase-config";
import { Link } from 'react-router-dom';


export default function Inscription() {
    const [newName, setNewName] = useState("")
    const [newMdp, setNewMdp] = useState(0)
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users")
  
    const createUser = async () => {
      await addDoc(usersCollectionRef, {name: newName , mdp : newMdp})
    }
    const updateUser = async (id, mdp) =>{
      const userDoc = doc(db, "users", id)
      await updateDoc(userDoc, )
    }
  
    useEffect(() => {
      const getUsers = async () => {
        const data = await getDocs(usersCollectionRef)
        setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  
      }
  
  
      getUsers()
    }, [])


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
                    </label>
                        <input 
                        type="text" 
                        placeholder='Entrez votre nom ...' 
                        onChange={(event) => {
                            setNewName(event.target.value)
                          }}/>

                    <label htmlFor="">Prénom : 
                    </label>
                        <input
                         type="text"
                          placeholder='Entrez votre prénom ...'/>

                    <label htmlFor="">Email : 
                    </label>
                        <input
                         type="text" 
                         placeholder='Entrez votre email ...' />

                    <label  htmlFor="">Genre : </label>
                    <div className="test"><input type="radio"  /> <p> Homme </p></div> 
                    <div className="test"> <input type="radio"  /><p> Femme</p></div>
                    
                    <label htmlFor="">Mot de passe : 
                    </label>
                        <input
                         type="text" 
                         placeholder='Entrez votre mot de passe ...'
                         onChange={(event) => {
                            setNewMdp(event.target.value)
                          }}  />
                    
                    <label htmlFor="">Vérification du mot de passe : 
                    </label>
                        <input 
                        type="text" 
                        placeholder='Entrez votre email ...' />
                    
                    <Link to={'/profile'}><button   action="Navigation" >Valider</button></Link>
                </form>
                <p className='Inscription-p'>Déjà un compte ? <a className='a-Inscription' href="connexion">Connectez-vous</a></p>
                <Footer/>
            </div>
            
        </div>


    );


};
