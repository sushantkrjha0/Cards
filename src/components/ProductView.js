import { useState } from "react";
import ProductImages from "./ProductImages";
import ProductDetails from "./ProductDetails";
import "../styles/ProductView.css";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductView = () => {
  const product = {
    title: "Arthaa A5 Unruled Notebook with Laser Engraved Designer MDF Cover--Spiral Bound 100 Pages 90GSM Bond Paper--Fully Openable Journal for Office & Personal Use--Limited Edition Black",
    images: [
      "/images/Notebook.jpeg",
      "/images/Notebook1.jpeg",
      "/images/Notebook2.jpeg",
      "/images/Notebook3.jpeg",
      "/images/Notebook4.jpeg",
    ],
    bulletPoints: [
      "Laser engraved MDF cover with a stylish black wooden design.",
      "100 pages of smooth 90 GSM bond paper, perfect for writing & sketching.",
      "Professional spiral binding for 180-degree flat opening.",
      "Compact A5 size, easy to carry and store.",
      "Limited edition artistic collection by Arthaa.",
    ],
    description: `The Arthaa A5 Designer Notebook combines durability and elegance. Featuring a laser-engraved MDF cover and premium unruled paper, this notebook is designed for professionals, artists, and writers. The perfect blend of aesthetics and functionality makes it ideal for various uses, from journaling to sketching.`,
  };

  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <div className="container mt-4">
      <div className="card shadow-lg p-3">
        <div className="row g-4">
          {/* Product Images */}
          <div className="col-md-4">
            <ProductImages images={product.images} setSelectedImage={setSelectedImage} />
            <div className="product-image mt-3">
              <img src={selectedImage} alt="Selected Product" className="img-fluid" />
            </div>
          </div>

          {/* Product Details */}
          <div className="col-md-8">
            <ProductDetails title={product.title} bulletPoints={product.bulletPoints} />
            <div className="product-description mt-3">
              <p>{showFullDescription ? product.description : `${product.description.substring(0, 150)}...`}</p>
              <button 
                className="btn btn-link p-0" 
                onClick={() => setShowFullDescription(!showFullDescription)}
              >
                {showFullDescription ? "See Less" : "See More"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;