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

	return (
		<div className='nav-content'>
			<h2>Connectify</h2>
			<nav ref={navRef} >
			<h3>Connectify</h3>
				
				<Link to={'/'}>Accueil</Link>
				<Link to={'/Connexion'}>Connexion</Link>
				<Link to={'/Inscription'}>Inscription</Link>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</div>
	);
}

export default Navigation;