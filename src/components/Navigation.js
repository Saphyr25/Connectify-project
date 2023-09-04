import React from 'react';
import { useRef } from "react";
import "../styles/nav.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';

	
function Navigation() {
	const navRef = useRef(null);

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
		// cette fonction va simplement cacher ou affi0cher ma classe lors d'un clique avec le parametre Onclick
	return (
		<div className='nav-content'>
			<h2>Connectify</h2>
			<nav ref={navRef} >
			<h3>Connectify</h3>
				
				<Link to={'/'}>Accueil</Link>
				<Link to={'/Connexion'}>Connexion</Link>
				<Link to={'/Inscription'}>Inscription</Link>
				{/* Link agis comme un href et permets la navigation d epage en page ou via un url, c est un composant de BrowserRouter */}
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
						{/* ferme l overlay lors d un clique sur la croix */}
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
					{/* ouvre l overlay lors d un clique sur les trois barres */}
				<FaBars />
			</button>
		</div>
	);
}

export default Navigation;