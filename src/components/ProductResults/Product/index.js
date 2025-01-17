import React from 'react';
import './../styles.scss';
import Button from './../../Forms/Button';

const Product = ({ productThumbnail, productName, productPrice }) => {
  if (
    !productThumbnail
    || !productName
    || typeof productPrice === 'undefined'
  ) return null;

  const configAddToCartBtn = {
    type: 'button'
  };

  return (
    <div className="product">
      <div className="thumbnail">
        <img src={productThumbnail} alt={productName} />
      </div>

      <div className="details">
        <ul>
          <li>
            <span className="name">
              {productName}
            </span>
          </li>
          <li>
            <span className="price">
              €{productPrice}
            </span>
          </li>
          <div className="addToCart">
            <li>
              <Button {...configAddToCartBtn}>
                Add to cart
              </Button>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Product;
