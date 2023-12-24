 import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

export const Users = () => {

    let users = useSelector(store=>store.authSection).users
    let dispatch=useDispatch()
  return (
    <div>
        <table>
            {
                users.map((user,index)=>{
                    return <tr>
                        <td>{user.name}</td>
                        <td>{user.password}</td>
                        <td><button onClick={()=>{
                            dispatch({
                            type:"User_delete_Kia",
                            payload:index
                            })
                        }}>Delete</button></td>
                    </tr>
                })
            }
        </table>
    </div>
  )
}

