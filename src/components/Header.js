import React from 'react';
import video from "../media/header_video.mp4";
import "../styles/header.css"

const Header = () => {
    return (
        <header className='headerContainer'>
            <video src={video} id="background-video" autoPlay loop muted></video>

            <div className="content">
                <h1>Connectify</h1>
            </div>
        </header>
       
    );
};

export default Header;

    

