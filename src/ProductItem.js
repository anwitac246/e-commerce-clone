import React from "react";


const ProductItem = ({ product }) => {
  return (
    <div className="product-item">
      <img src={product.img} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-desc">{product.desc}</p>
      <p className="product-price">{product.price}</p>

      <button className="buy-now">Add to Cart</button>
    </div>
  );
};

export default ProductItem;
