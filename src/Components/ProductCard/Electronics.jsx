import React, { useEffect, useState } from 'react'
import Header from '../Header/Header';
import ProductCard from './ProductCard';

function Electronics() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics")
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
              
              key={product.id}
              item={product}
            />
          ))
        }

        </div>


    </div>
  )
}

export default Electronics