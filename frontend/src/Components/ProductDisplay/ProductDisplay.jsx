import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="product-display">
      <div className="product-display__left">
        <div className="product-display__img-list">
          <img src={product.image} alt="product img" />
          <img src={product.image} alt="product img" />
          <img src={product.image} alt="product img" />
          <img src={product.image} alt="product img" />
        </div>
        <div className="product-display__img">
          <img
            className="product-display__main-img"
            src={product.image}
            alt=""
          />
        </div>
      </div>
      <div className="product-display__right">
        <h1>{product.name}</h1>
        <div className="product-display__right-star">
          <img src={star_icon} alt="icon" />
          <img src={star_icon} alt="icon" />
          <img src={star_icon} alt="icon" />
          <img src={star_icon} alt="icon" />
          <img src={star_dull_icon} alt="icon" />
          <p>(122)</p>
        </div>
        <div className="product-display__right-prices">
          <div className="product-display__right-price-old">
            ${product.old_price}
          </div>
          <div className="product-display__right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="product-display__right-description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa nobis
          dolore officiis aliquam ab enim id omnis
        </div>
        <div className="product-display_right-size">
          <h1>Select Size</h1>
          <div className="product-display__right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          ADD YO CART
        </button>
        <p className="product-display__right-category">
          <span>Category : </span>
          Women, T-Shirt, Crop Top
        </p>
        <p className="product-display__right-category">
          <span>Tags: </span>
          Modern,Latest, Crop Top
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
