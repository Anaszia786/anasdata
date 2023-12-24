import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Card } from '../card/card';

export const WishList = () => {

    let dispatch = useDispatch();
    let products = useSelector(store=>store.ProductSection.products);


  return (
   <div id='product-section' className='flex'>
            {
                products.filter(product=>product.abc).map((product)=>{
                    return <Card a1={product}>
                        <button onClick={()=>{
                            dispatch({
                                type:"TOGGLE_LIKED_BTN",
                                id:product.id
                              })
                        }}>Remove</button>
                    </Card>
                })
            }
        </div>
  )
}
