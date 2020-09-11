import React from 'react';
import {Link} from 'react-router-dom';
import data from '../mock/data' ;

function ProductScreen(props) {

  const productId = props.match.params.id;
  const product = data.products.find(product => product._id = productId);

  return (
    <div>
      <div>
        <Link to ="/">Back to Homepage</Link>
      </div>
      <div className="details">
        <div className="detail-img">
          <img src={product.image} alt="Photos"/>
        </div>
        <div className="detail-info">
          <ul>
            <li>
              <h4>{product.name}</h4>
            </li>
            <li>
              {product.brand}
            </li>
            <li>
              ${product.price}
            </li>
            <li>
              {product.brand} Stars {product.numReview} Reviews
            </li>
            <li>
              Description
            </li>
          </ul>
        </div>
        <div className="detail-action">
          Buy
        </div>
      </div>
    </div>
  );
}

export default ProductScreen;