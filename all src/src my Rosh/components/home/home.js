import React from 'react'
import {useSelector } from 'react-redux'
import {Card} from "../card/card"

export const Home = () => {
    let setProducts=useSelector((store)=>{
        return store.ProductSection
    })

  return (
    <>
    <div className="flex">
    {
    setProducts.products.filter((product)=>{
        if (product.name.includes(setProducts.searched)){
            return true;
        }
    }).map((product)=>{
        return <Card a1={product}/>
    })
    }   
    </div>    
    </>
  ) 
}
