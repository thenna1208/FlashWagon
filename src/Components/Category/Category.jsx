import React from 'react'
import './Category.css'


function Category() {
    
  return (
    <div className="category-container">
    <div className="category-title"><a href='/'>All</a></div>
    <div className="category-title"><a href='/electronics'>Electronics</a></div>
    <div className="category-title"><a href='/jewelery'>Jewelery</a></div>
    <div className="category-title"><a href='womensclothing'> Women's clothing </a></div>
    <div className="category-title"><a href='/mensclothing'> Men's Clothing </a></div>
  </div>
  )
}

export default Category
