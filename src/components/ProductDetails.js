import React from "react";

const ProductDetails = ({ title, bulletPoints, description }) => {
  return (
    <div className="card p-4">
      <h2 className="card-title">{title}</h2>
      <ul className="list-group list-group-flush mb-3">
        {bulletPoints.map((point, index) => (
          <li key={index} className="list-group-item">{point}</li>
        ))}
      </ul>
      <p className="card-text">{description}</p>
    </div>
  );
};

export default ProductDetails;
