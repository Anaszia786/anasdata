import React from 'react'
import './home.css';
import { useSelector } from 'react-redux';
import { Card } from '../card/card';
import { useParams } from 'react-router-dom';

export const Home = () => {

    let params = useParams();

    let productsection =  useSelector(store=>{
        return store.ProductSection;
    });

  return (
    <div id='product-section' className='flex'>
            {
                productsection.products.filter((product)=>{
                  if(params.abc && product.category.toLowerCase()  == params.abc){
                    return true;
                  }else if(!params.abc){
                    return true;  
                  }
                  
                }).filter(product=>{
                  if(product.title.toLowerCase().includes(productsection.searched.toLowerCase())){
                    return true;
                  }
                }).map((product)=>{
                   return <Card a1={product}></Card>
                })
            }
        </div>
  )
}
