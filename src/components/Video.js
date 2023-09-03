import React from 'react';
import video from "../media/video.mp4";


const Video = () => {
    return (
        <div style={{textAlign:"center"}}>
             <h1 >Video</h1>
            <video src={video} 
             autoPlay 
             muted
             loop
             width="90%"
             height="100%" ></video>
            
        </div>
    );
};

export default Video;

