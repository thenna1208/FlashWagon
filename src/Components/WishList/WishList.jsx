import React from 'react'
import { useSelector } from 'react-redux'
import Header from '../Header/Header'
import ProductCard from '../ProductCard/ProductCard'
import './WishList.css'
import { useNavigate } from 'react-router-dom'


function Wishlist() {

  const navigate = useNavigate()

  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems)
  console.log(wishlistItems);




  return (
    <div>
    <Header />
    {wishlistItems.length > 0 ? (
      <div className='body'>
        <div className='removecart'>
          <div className='product-container'>
            {wishlistItems.map((product) => (
              <ProductCard key={product.id} item={product} />
            ))}
          </div>
        </div>
      </div>
    ) : (
      navigate('/')
    )}
  </div>
)

}

export default Wishlist
