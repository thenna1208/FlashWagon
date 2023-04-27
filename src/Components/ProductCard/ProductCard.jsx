
import React from 'react';
import './ProductCard.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, toggleIsInCart } from '../../Store/slices/cartSlices';

function ProductCard({ item }) {


  const rate = Math.floor(item.rating.rate);
  const ratings = Array(rate).fill(0);
  const dispatch = useDispatch();

  const isInCart = useSelector((state) =>
    state.cartItems.some((items) => items.id === item.id)
  );

  const handleAddToCartClick = () => {
    if (isInCart) {
      dispatch(removeItem(item.id));
      dispatch(toggleIsInCart()); 
    } else {
      dispatch(addItem({ item }));
      dispatch(toggleIsInCart());
    }
  };



  return (
    <div className="card">
      <Link to={`/individualcard?id=${item.id}`}>
        <img src={item.image} className="card-img-top" alt="..." />
      </Link>
      <hr />
      <div className="card-body">
        <div className="product-card">
          <h5 className="card-title">{item.title}</h5>
        </div>
        <div className="description">
          <p>{item.description}</p>
        </div>
        <div className="rating-mrp">
          <div>
            {ratings.map((r, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi rating bi-star-fill"
                viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
            ))}
          </div>
          <div className="mrp">MRP: &#8377; {item.price}</div>
        </div>
        <hr />
        <div className="card-bottom">

          <button onClick={handleAddToCartClick} className={isInCart ? 'btn btn-danger' : 'btn btn-info'}>
          {isInCart ? "Remove from cart" : "Add to cart"} 
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
