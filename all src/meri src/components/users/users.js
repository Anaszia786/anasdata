 import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const Users = () => {
    let dispatch = useDispatch();
    // let users = useSelector(store=>store.authSection).users
    let [users,setUsers]=useState([]);
    useEffect(function(){
        axios.get('/user_loa').then(function(resp){
            console.log(resp.data)
            setUsers(resp.data)
        })
    },[])



   
    let products = useSelector(store=>store.ProductSection).products

  return (
    <div>
        <table>
            {
                users.map((user,index)=>{

                    let cproducts =  products.filter(product=>product.owner == user.id);

                    return <tr>
                        <td>{user.name}</td>
                        <td>{user.password}</td>
                        <td 
                        // onClick={()=>{

                        //     dispatch({
                        //         type:"USER_DELETE",
                        //         payload:user.id
                        //     });

                        // }}
                        >
                            <button onClick={()=>{
                                axios.delete('/delete_user?q='+index,{}).then(()=>{
                                    users.splice(index,1);
                                    setUsers([...users]);
                                })
                            }}>Delete</button>
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

