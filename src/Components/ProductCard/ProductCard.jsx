import React, { useState } from 'react'
import './ProductCard.css'
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, toggleIsInCart } from '../../Store/slices/cartSlices';
import { Link } from 'react-router-dom';

function ProductCard({ item }) {

  localStorage.setItem('item', JSON.stringify(item));

  var rate = Math.floor(item.rating.rate);
  var ratings = Array(rate).fill(0)
  const dispatch = useDispatch()



  const isInCart = useSelector((state) =>
    state.cartItems.some((items) => items.id === item.id)
  );

  const handleClick = () => {
    if (isInCart) {
      dispatch(removeItem(item.id));
      dispatch(toggleIsInCart());
    } else {
      dispatch(addItem({ item }));
      dispatch(toggleIsInCart());
    }
  };





 


  return (
    <div className="card" >
      <button className='wishlist-btn'
        // onClick={handleWishClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-suit-heart-fill" viewBox="0 0 16 16">
          <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
        </svg>
      </button>

      <Link to={`/individualcard?id=${item.id}`}>
        <img src={item.image} className="card-img-top" alt="..." />
      </Link>
      <hr></hr>
      <div className="card-body">

        <div className="product-card">

          <h5 >{item.title}</h5>

        </div>



        <div className='description'>
          <p>{item.description}</p>
        </div>

        <div className='rating-mrp'>
          <div>
            {ratings.map((r) => (
              <svg

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
          <div className='mrp'>MRP: &#8377; {item.price}</div>
        </div>


        <hr></hr>

        <div className="card-bottom">



          <button
            onClick={handleClick}
            className={isInCart ? "btn btn-danger" : "btn btn-info"}>
            {isInCart ? "Remove from cart" : "Add to cart"}
          </button>




        </div>

      </div>
    </div>
  )
}

export default ProductCard
