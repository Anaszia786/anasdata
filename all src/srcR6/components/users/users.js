 import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const Users = () => {

    let dispatch = useDispatch();
    let users = useSelector(store=>store.authSection).users

    let products = useSelector(store=>store.ProductSection).products

  return (
    <div>
        <table>
            {
                users.map((user)=>{

                    let cproducts =  products.filter(product=>product.owner == user.id);

                    return <tr>
                        <td>{user.name}</td>
                        <td>{user.password}</td>
                        <td onClick={()=>{

                            dispatch({
                                type:"USER_DELETE",
                                payload:user.id
                            });

                        }}>
                            <button>Delete</button>
                        </td>
                        <td>
                            <ol>
                                {
                                    cproducts.map((product)=>{
                                        return <li>{product.title}</li>
                                    })
                                }
                            </ol>
                        </td>
                        
                    </tr>
                })
            }
        </table>
    </div>
  )
}

