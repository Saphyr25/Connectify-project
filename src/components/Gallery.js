import React from 'react';
import image1 from "../media/gallery1.jpg"
import image2 from "../media/gallery2.jpg"
import image3 from "../media/gallery3.jpg"
import image4 from "../media/gallery4.jpg"

const Gallery = () => {
    return (
        <div style={{ textAlign: "center" }}>
            <h1 >Gallery</h1>
            <div className="gallery_content">
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
                <img src={image4} alt="" />
            </div>
        </div>

    );
};

export default Gallery;