import React, { useEffect, useState } from 'react'
import Header from '../Header/Header';
import ProductCard from './ProductCard';

function MensClothing() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men's%20clothing")
      .then((response) => response.json())
      .then((jsonResp) => {
        console.log(jsonResp);
        setProducts(jsonResp)
      }).catch((err) => {
        console.log(err);
      })
  }, [])
  return (
    <div>
      <Header />

      <div className='product-container '>
        {
          products && products.map((product) => (
            <ProductCard
              // notifyAboutCartChanges={getCartItemsCount}
              key={product.id}
              item={product}
            />
          ))
        }

        </div>


    </div>
  )
}

export default MensClothing
