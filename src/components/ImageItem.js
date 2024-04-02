import React from 'react';

const ImageItem = ({ image }) => {
  console.log("Image src:", image.src); // Log the src
  return (
    <div className="image-item">
      <img src={image.src.original} alt={image.alt} style={{ width: '100%', height: 'auto' }} />

      <p>Photographer: {image.photographer}</p>
    </div>
  );
};

export default ImageItem;
