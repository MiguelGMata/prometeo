import React from 'react';
import './image.css';

const Image = ({ className = "", alt = "", width = "", height = "", image = " https://ik.imagekit.io/logoMGM/imageNotFound.jpg?updatedAt=1727344985527" }) => {

    return (
        <img
            src={image}
            alt={alt}
            width={width}
            height={height}
            className={`image ${className}`}
        />
    )
}
export default Image;