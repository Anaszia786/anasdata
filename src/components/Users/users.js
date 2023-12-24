import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const Users = () => {

    let [users, setUsers] = useState([])
    let dispatch = useDispatch();

    useEffect(()=>{
        axios.get('/get-users').then((resp)=>{
            setUsers(resp.data);
        })
    }, [])

    // let users = useSelector(store=>store.authSection).users

  return (
    <div>

        <table>
            {
                users.map((user, meraIndex)=>{
                    return <tr>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                        <td>
                            <button onClick={()=>{

                                axios.delete('/del-user?id='+user._id)

                                users.splice(meraIndex, 1);
                                setUsers([...users]);
                                    
                                // dispatch({
                                //     type:"USER_DELETED",
                                //     rowNumber:meraIndex
                                // })

                                
                            }}>Delete</button>

                                <button onClick={()=>{

                                    user.email =  prompt('enter email', user.email);
                                    user.password =  prompt('enter pasword');

                        axios.put('/update-user', user).then(()=>{
                                setUsers([...users]);
                                })

                                // dispatch({
                                //     type:"USER_DELETED",
                                //     rowNumber:meraIndex
                                // })


                                }}>Update</button>
                        </td>
                    </tr>
                })
            }
        </table>
    </div>
  )
}

export default Users