import React from 'react';
import Banner from "../media/banner-profil.png"
import Pdp from "../media/pdp.png"
import "../styles/header2.css"

const Header2 = () => {
    return (
        
        <div className="banner">
          {/* <img className='image' src={Banner}/> */}
          <div className='bannerProfile'><img className='avatar' src={Pdp} />
            {/* <Text cName="name"
                  text="riyad"
                  text2="habchi"
                  /> */}
          </div>
        </div>
    );
};

export default Header2;