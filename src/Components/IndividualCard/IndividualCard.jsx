import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import { useLocation } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import './IndividualCard.css'

function IndividualCard() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');
    console.log(id);

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


    const productIdToFind = parseInt(id);
    const product = products.find((p) => p.id === productIdToFind);
    console.log(product);

    return (
        <div>
            <Header />

            <div className='card-size'>
                <div className='Card'>

                    <div className='product-container individual'>
                        {
                            product && <ProductCard item={product} />
                        }

                    </div>
                </div>
            </div>


        </div>
    );
}

export default IndividualCard
