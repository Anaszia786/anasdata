import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import {toast} from 'react-toastify'
const ProductDetail = () => {

    let dispatch = useDispatch();

    let params = useParams();
    let product= useSelector(store=>store.ProductSection.products)
    .find(product=>product.id == params.someID);

  return (
    <div>
        <button onClick={()=>{

            dispatch({
                type:"ADD_TO_CART",
                payload:product
            })

            toast.error("Wow so easy!");

        }}>Add to Cart</button>
        <img src={product.img} />
        <h1>{product.title}</h1>
    </div>
  )
}

export default ProductDetail