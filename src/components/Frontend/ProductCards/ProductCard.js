import React from 'react';
import './ProductCard.css';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product._id}`} state={{ product }}>
      <div className="product-card">
        <img src={product.image} alt={product.name} className="product-card__image" />
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__price">${product.price}</p>
      </div>
    </Link>
  );
}

export default ProductCard;
