import React from "react";

const ProductImages = ({ images, setSelectedImage }) => {
  return (
    <div className="product-thumbnails mt-3">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="Product Thumbnail"
          className="thumbnail"
          onMouseEnter={() => setSelectedImage(img)} 
          style={{ cursor: "pointer", marginRight: "10px", width: "50px", height: "50px", objectFit: "cover" }}
        />
      ))}
    </div>
  );
};

export default ProductImages;
