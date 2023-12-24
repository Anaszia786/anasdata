import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';

const ProductDetail = () => {

    let dispatch = useDispatch();

    let params = useParams();
    let item = useSelector(store=>store.ProductSection.products).find(item=>item.id == params.id);



  return (
    <div>
        <h1>{item.title}</h1>
        <h1>{item.price}</h1>
        <button onClick={()=>{

            dispatch({
                type:'ADD_TO_CART',
                payload:item
            });

            toast.success("Item added to cart!");

        }}>Add to Cart</button>

        <Link to='/checkout'>Checkout</Link>

    </div>
  )
}

export default ProductDetail