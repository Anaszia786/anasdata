import React from 'react'
import { useSelector } from 'react-redux'

const Dashboard = () => {

  let user = useSelector(store=>store.authSection.loggedUser);
  
  let  userProducts =  useSelector(store=>store.ProductSection.products).filter(product=>product.owner == user.id);

  return (
    <div>
      <table>
        {
          userProducts.map((product)=>{
            return <tr>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td><img src={product.img} /></td>
            </tr>
          })
        }
      </table>
    </div>
  )
}

export default Dashboard