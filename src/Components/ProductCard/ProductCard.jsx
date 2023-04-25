import React from 'react'
import './ProductCard.css'

function ProductCard({ item }) {
  var rating = Math.floor(item.rating.rate);
  var ratings = Array(rating).fill(0)


  return (
    <div className="card" >
      <img src={item.image} className="card-img-top" alt="..." />
      <hr></hr>
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
       
        <div className='rating-mrp'>
        <div>
            {ratings.map((r) => (
              <svg
                
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi rating bi-star-fill"
                viewBox="0 0 16 16">

                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
            ))} 
          </div>
        <div className='mrp'>MRP: &#8377; {item.price}</div>
        </div>
        

        <hr></hr>

        <div className="card-bottom">


          {/* {isLoggedIn && ( */}
            <button
            //  onClick={handleAddToCartClick} 
             className="btn btn-info">
              Add to Cart
            </button>
            {/* )} */}

        </div>

      </div>
    </div>
  )
}

export default ProductCard
