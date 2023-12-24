 import React from 'react'
import { useSelector } from 'react-redux'

export const Users = () => {

    let users = useSelector(store=>store.authSection.users)

  return (
    <div>
        <table>
            {
                users.map((user)=>{
                    return <tr>
                        <td>{user.name}</td>
                        <td>{user.password}</td>
                    </tr>
                })
            }
        </table>
    </div>
  )
}

