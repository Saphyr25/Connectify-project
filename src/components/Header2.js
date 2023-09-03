import React from 'react';
import Banner from "../media/banner-profil.png"
import Pdp from "../media/pdp.png"
import "../styles/header2.css"

const Header2 = () => {
    return (
        
        <div className="banner">
          {/* <img className='image' src={Banner}/> */}
          <div className='bannerProfile'><img className='avatar' src={Pdp} />
          <h1>nom</h1>
        <h1>prenom</h1>
          </div>

        </div>
    );
};

export default Header2;