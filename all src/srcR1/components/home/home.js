import React from 'react'
import './home.css';
import { useSelector } from 'react-redux';
import { Card } from '../card/card';

export const Home = () => {


    let productSection =  useSelector(store=>{
        return store.ProductSection;
    })

  return (
    <div id='product-section' className='flex'>
            {
                productSection.products.filter((product)=>{
                    if(product.title.includes(productSection.searched)){
                        return true;
                    }
                }).map((product)=>{
                    return <Card a1={product} />
                })
            }
        </div>
  )
}
