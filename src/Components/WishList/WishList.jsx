import React from 'react'
import { useSelector } from 'react-redux'
import Header from '../Header/Header'
import ProductCard from '../ProductCard/ProductCard'
import './WishList.css'


function Wishlist() {
 
 
    const wishlistItems = useSelector((state) => state.wishlist.wishlistItems)
    console.log(wishlistItems);


  

  return (
    <div>
      <Header />

      <div className='body'>

        <div className = 'removecart'>
        <div className='product-container '>
          {
            wishlistItems && wishlistItems.map((product) => (
              <ProductCard
                key={product.id}
                item={product}
              />
            ))
          }
        </div>
        </div>

        

      </div>


    </div>
  )
}

export default Wishlist
