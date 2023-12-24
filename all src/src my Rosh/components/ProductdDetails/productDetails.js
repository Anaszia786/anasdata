import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {Link} from "react-router-dom"

export const ProductDetails = () => {
    let params=useParams();
    let dispatch=useDispatch();
    let items=useSelector(store=>store.ProductSection.products).find(product=>product.id==params.id)
  return (
    <div>
        <h1>{items.name}</h1>
        <h1>{items.Price}</h1>
        <button onClick={()=>{
          dispatch({
            type:"Cart_items",
            payload: items
          })
        }}>Add to Cart</button>
        <button>
        <Link to="/checkout">Checkout</Link>
        </button>
    </div>
  )
}
