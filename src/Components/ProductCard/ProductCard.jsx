
import React from 'react';
import './ProductCard.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, addWishlistItem, removeItem, removeWishlistItem, toggleIsInCart, toggleIsInWishlist } from '../../Store/slices/cartSlices';

function ProductCard({ item }) {


  const rate = Math.floor(item.rating.rate);
  const ratings = Array(rate).fill(0);
  const dispatch = useDispatch();

  const isInCart = useSelector((state) =>
    state.cart.cartItems.some((items) => items.id === item.id)
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

  const isInWishlist = useSelector((state) =>
    state.wishlist.wishlistItems.some((items) => items.id === item.id)
  );

  const handleAddToWishlistClick = () => {
    if (isInWishlist) {
      dispatch(removeWishlistItem(item.id));
      dispatch(toggleIsInWishlist());
    } else {
      dispatch(addWishlistItem({ item }));
      dispatch(toggleIsInWishlist());
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
          <div>
            <button onClick={handleAddToWishlistClick} className={isInWishlist ? 'btn wish btn-danger' : 'btn wish btn-info'}>

              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
              </svg>
            </button>
          </div>

          <div>
  <button
    onClick={handleAddToCartClick}
    className={isInCart ? "btn cart-btn btn-danger" : "btn cart-btn btn-info"}
  >
    {isInCart ? "Remove from cart" : "Add to cart"}
  </button>

  
</div>





        </div>
      </div>
    </div>
  );
}

export default ProductCard;
