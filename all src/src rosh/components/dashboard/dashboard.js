import React from 'react'
import { useSelector } from 'react-redux'


export const Dashboard = () => {
  let user=useSelector((store)=>store.ProductSection).Lusers
  
  let products=useSelector((store)=>store.ProductSection.products).filter((product)=>product.owner=user.id);
  return <div>
    <table>

{
  products.map((product)=>{
    return <tr>
    <td>{product.name}</td>
    <td>{product.price}</td>
    <td><img src={product.img} /></td>
    </tr>
    
  })
}


  </table>

  </div>




}
