import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
  
 let total = 0;
  let orders = useSelector(store=>store.ProductSection).orders;

  return (
    <div>
    <table>
        <tr>
            <th>Title</th>
            <th>Price</th>
        </tr>
        {
            orders.map((order)=>{
                total += order.price;
                return <tr>
                    <td>{order.title}</td>
                    <td>{order.price}</td>
                </tr>
            })
        }
        <tr>
            <td>Total bill</td>
            <td>{total}</td>
        </tr>
    </table>
    </div>
  )
}

export default Cart