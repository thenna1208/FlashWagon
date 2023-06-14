import React from 'react'
import { useSelector } from 'react-redux'
import Header from '../Header/Header'
import ProductCard from '../ProductCard/ProductCard'
import './Cart.css'
import { useNavigate } from 'react-router-dom'

function Cart() {

  const navigate = useNavigate()

  const cartItems = useSelector((state) => state.cart.cartItems)
  console.log(cartItems);

  const subtotal = Math.floor(cartItems.reduce((total, item) => total + item.price, 0))
  const Shipping = 25;

  return (
    <div>
      <Header />

      <div className='body'>
        <div className='removewish'>
          <div className='product-container '>
            {
              cartItems && cartItems.map((product) => (
                <ProductCard
                  key={product.id}
                  item={product}
                />
              ))
            }
          </div>
        </div>

        <div className='order-container'>
          {cartItems.length > 0 ? (
            <div className="card summary">
              <h4>Order Summary</h4>
              <hr />
              <div className='details'>
                <div>
                  Quantity : <span>{cartItems.length}</span>
                </div>
                <div>
                  Subtotal : <span>{subtotal}</span>
                </div>
                <div>
                  Shipping Estimate : <span>{Shipping}</span>
                </div>
                <hr />
                <div>
                  Total : <span>{subtotal + Shipping}</span>
                </div>
                <hr />
              </div>
            </div>
          ) : (
            navigate('/')
          )}
        </div>





      </div>


    </div>
  )
}

export default Cart
