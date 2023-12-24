import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '../../store/store'
const Users = () => {
    let userData=useSelector(store=>store.ProductSection).signup
    let products=useSelector((store)=>store.ProductSection.products)
    let dispatch=useDispatch();
  return <div>
    <table>
        {
          userData.map((user,index)=>{
            let cProducts=products.filter((product)=>product.owner==user.id)
            return <tr>
              <td>
                {user.email}
              </td>
              <td>
                {user.password}
              </td>
              <td>
                <button onClick={()=>{
                  dispatch({
                    type:"Delete_User",
                    payload:index
                  })
                }
                }>
                  Delete
                </button>
              </td>
            <td>
            
            {
              cProducts.map((product)=>{
                return <li>{product.name}</li>
              })
            }

            </td>
            </tr>
          })
          }



    </table>
  </div>

  
}


export default Users