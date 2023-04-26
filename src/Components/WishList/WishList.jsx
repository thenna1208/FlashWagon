import React from 'react'
import Header from '../Header/Header'
import { useSelector } from 'react-redux';
import ProductCard from '../ProductCard/ProductCard';

function WishList() {

  const wishlistItems = useSelector((state) => state.wishlistItems)
  console.log(wishlistItems);

  return (
    <div>
      <Header/>
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
  )
}

export default WishList
