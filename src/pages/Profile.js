import React from 'react';
import Navigation2 from '../components/Navigation2';
import "../styles/profile.css"
import "../styles/tabs.scss"
import Gallery from '../components/Gallery';
import Video from '../components/Video';
import Walls from '../components/Walls';
import Music from '../components/Music';
import Header2 from '../components/Header2';


const Profile = () => {
    return (
        <div className='container-profil'>

            < Navigation2 />
            <div>
            <Header2 />
            </div>

            <div class="tabs">
                <input type="radio" name="tabs" id="tabone" checked="checkout" />
                <label for="tabone">All</label>
                <div class="tab">
                    <Walls />
                    <Gallery />
                    <Video />
                    <Music />
                </div>

                <input type="radio" name="tabs" id="tabtwo" />
                <label for="tabtwo">Walls</label>
                <div class="tab">
                    <Walls />
                </div>

                <input type="radio" name="tabs" id="tabthree" />
                <label for="tabthree">Gallery</label>
                <div class="tab">
                    <Gallery />
                </div>

                <input type="radio" name="tabs" id="tabfour" />
                <label for="tabfour">Video</label>
                <div class="tab">
                    <Video />
                </div>

                <input type="radio" name="tabs" id="tabfive" />
                <label for="tabfive">Music</label>
                <div class="tab">
                    <Music />
                </div>

            </div>

        </div>
        

    );
};

export default Profile;