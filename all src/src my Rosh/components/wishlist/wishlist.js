import React from 'react'
import { Card } from '../card/card'
import {useSelector,useDispatch} from "react-redux";

export const Wishlist = () => {
    let dispatch=useDispatch();
    let products=useSelector(store=>store.ProductSection.products)
  return    <div style={{display:'flex', gap:'20px', justifyContent:'center'}}>
        {
            products.filter(product=>product.abc).map((product)=>{
                return <Card a1={product}>
                    <button onClick={()=>{
                            dispatch({
                                type:"Like_butn",
                                id:product.id
                              })
                        }}>Remove</button>
                </Card>
            
            })
        }

    </div>
  
}
