import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import ProductCard from '../ProductCard/ProductCard'
import './Home.css'


function Home() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
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

      <div className='product-container'>
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

export default Home
