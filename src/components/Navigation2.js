import React from 'react';
import { useRef } from "react";
import "../styles/nav.css";
import { FaBars, FaTimes } from "react-icons/fa";

function Navigation2() {
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
				<a href="/accueil">Accueil</a>
				<a href="/connexion">Connexion</a>
				<a href="/inscription">Inscription</a>
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