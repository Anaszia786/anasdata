import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import M from 'materialize-css'
export const Header = () => {

    let sendData = useDispatch();

    return (
    <nav>
  <div className="nav-wrapper">
    <Link to='/' className="brand-logo">
      LOGO
    </Link>
    <ul id="nav-mobile" className="right hide-on-med-and-down">
    <li>
        <input type='search' onChange={(evt)=>{


            sendData({
                type:"SEARCH_PRODUCT",
                payload:evt.target.value
            })

        }} />
    </li>
    <li>
        <a onClick={()=>{
            
            M.Modal.init(document.getElementById('modal1'), {}).open();

        }}>Login</a>
      </li>
      <li>
        <Link to='/wishlist'>Wishlist</Link>
      </li>
      <li>
        <Link to='/signup'>Signup</Link>
      </li>
      <li>
        <Link to='/add-product'>Add Product</Link>
      </li>
      <li>
        <Link to='/users'>Users</Link>
      </li>
      <li>
        {/* <Link href="collapsible.html">JavaScript</Link> */}
      </li>
    </ul>
  </div>
</nav>

  )
}
