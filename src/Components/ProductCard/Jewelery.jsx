import React, { useEffect, useState } from 'react'
import Header from '../Header/Header';
import ProductCard from './ProductCard';

function Jewelery() {
  const [jewelItem, setJewel] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then((response) => response.json())
      .then((jsonResp) => {
        console.log(jsonResp);
        setJewel(jsonResp)
      }).catch((err) => {
        console.log(err);
      })
  }, [])
  return (
    <div>
      <Header />

      <div className='product-container '>
        {
          jewelItem && jewelItem.map((product) => (
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

export default Jewelery

