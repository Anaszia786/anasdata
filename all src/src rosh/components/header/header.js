import React from 'react'
import {Link} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
const Header = () => {
  let searchdData = useDispatch();
  let Lusers=useSelector((store)=>store.ProductSection.Lusers)
  let dispatch=useDispatch();

  return (
    <nav>
  <div className="nav-wrapper">
    <Link to="/" className="brand-logo">
      Logo
    </Link>
    <ul id="nav-mobile" className="right hide-on-med-and-down">
      <li>
  <input placeholder='Write to search' type="searched" onChange={(evt)=>{
    searchdData(
      {
        type:"Search_Kia",
        payload:evt.target.value

      }
    )
  }} />

      </li>
     { !Lusers?

       <li>
        <Link to="/Login">Login</Link>
      </li>
      :null }
      
      <li>
        <Link to="/Wishlist">Wishlist</Link>
      </li>

      { !Lusers?
      <li>
        <Link to="/Signup" >Signup</Link>
      </li>
      :null }

      { Lusers?
      <li>
        <Link to="/AddProduct" >Add Product</Link>
      </li>
      :null }

      { Lusers?
      <li>
        <Link to="/Users" >Users</Link>
      </li>
      :null }

      { Lusers?
      <li>
        <Link onClick={()=>{
          dispatch({
            type:"Logout"
          })
        }} 
         to="/" >Logout</Link>
      </li>
      :null }


    </ul>
  </div>
</nav>

  )
}

export default Header