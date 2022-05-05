
import React from "react";
import { Link } from "react-router-dom";
import Header from "../Layout/Header";

const Index3 = ({ imageUrl, description, price, name, productId }) => {
  return (
	  <>
	  <Header/>
    <div className="product">
      <img src={imageUrl} alt={name} />

      <div className="product__info">
        <p className="info__name">{name}</p>

       

        <p className="info__price">Rs{price}</p>

        <Link to={`/product/${productId}`} className="info__button">
          View
        </Link>
      </div>
    </div>
	</>
  );
};

export default Index3;