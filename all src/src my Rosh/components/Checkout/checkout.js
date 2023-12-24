import React from 'react'
import { useSelector } from 'react-redux'

export const Checkout = () => {
    let orders=useSelector(store=>store.ProductSection.details)
    let total=0;
  return (
    <div>
        <table>
            {
                orders.map((order)=>{
                    total+=order.Price;
                    return <tr>
                        <td>{order.name}</td>
                        <td>{order.Price}</td>
                    </tr>
                })
            }
            <tr>
                <td>Total Bill</td>
                <td>{total}</td>
            </tr>
        </table>
    </div>
  )
}
