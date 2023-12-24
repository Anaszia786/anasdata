import React from 'react'
// import './home.css';
import { useSelector } from 'react-redux';
import { Card } from '../card/card';

export const Wishlist = () => {


    let products =  useSelector(store=>{
        return store.ProductSection;
    }).products;

  return (
    <div id='product-section' className='flex'>
            {
                products.filter(product=>product.liked == true).map((product)=>{
                   return <Card a1={product}></Card>
                })
            }
        </div>
  )
}
