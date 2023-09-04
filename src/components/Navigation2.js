import React from 'react';
import { useRef } from "react";
import "../styles/nav.css";
import { FaBars, FaTimes } from "react-icons/fa";


function Navigation2() {
	const navRef = useRef(null);
	// useRef permets de stocker une valeur qui ne provoque pas de nouveau rendu lors de la mise à jour.

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<div className='nav-content' style={{background:"#20835D"}}>
			<h2>Connectify</h2>
			<nav ref={navRef} >
			<h3>Connectify</h3>
				<a href="/">Profil</a>
				<a href="/Contact">Contact</a>
				<a href="/Accueil">Déconnexion</a>
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

export default Navigation2;