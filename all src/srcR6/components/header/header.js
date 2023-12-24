import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./header.css"
import { Link } from 'react-router-dom';
import M from 'materialize-css'
export const Header = () => {


  let dispatch = useDispatch();
  let loggedUser = useSelector(store=>store.authSection.loggedUser)
    let sendData = useDispatch();

    return (
    <nav>
  <div className="nav-wrapper">
    <Link to='/' className="brand-logo">
      LOGO
    </Link>
    {loggedUser ? <span className='logo-name'>Welcome , <b>{loggedUser.name}</b></span> : null}
    <ul id="nav-mobile" className="right hide-on-med-and-down">
    <li>
        <input type='search' onChange={(evt)=>{


            sendData({
                type:"SEARCH_PRODUCT",
                payload:evt.target.value
            })

        }} />
    </li>
    {!loggedUser ? <li>
        <a onClick={()=>{
            
            M.Modal.init(document.getElementById('modal1'), {}).open();

        }}>Login</a>
      </li>
      :null}
      <li>
        <Link to='/wishlist'>Wishlist</Link>
      </li>
      
      {!loggedUser ? <li>
        <Link to='/signup'>Signup</Link>
      </li> : null}

      {loggedUser ? <li>
        <Link to='/add-product'>Add Product</Link>
      </li> :  null}
      
      {loggedUser ? <li>
        <Link to='/users'>Users</Link>
      </li> :  null}

      {loggedUser ? <li>
        <Link onClick={()=>{
          dispatch({
            type:"USER_LOGGED_OUT"
          })
        }} to='/'>Logout</Link>
      </li> : null}
      <li>
        {/* <Link href="collapsible.html">JavaScript</Link> */}
      </li>
    </ul>
  </div>
</nav>

  )
}
