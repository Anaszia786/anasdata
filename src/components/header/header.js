import React from 'react'
import './header.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

 const Header = () => {

  let user = useSelector(store=>store.authSection.loggedWalaUser);


  let dispatch = useDispatch();
  let orders = useSelector(store=>store.ProductSection).orders;

  return (
    <nav>
    <div class="nav-wrapper">

    <Link to='/' class="brand-logo">Home</Link>

      {/* <a href="#" class="brand-logo">Logo</a> */}



      <ul id="nav-mobile" class="right hide-on-med-and-down">
<li>
  <input type="text" onChange={(evt)=>{

      dispatch({
        type:"SEARCHED_PRODUCT",
        payload:evt.target.value
      });

  }} />
</li>
        <li>
          <Link to='/category/men'>MEN</Link>
        </li>
        <li>
          <Link to='/category/women'>Women</Link>
        </li>
        <li>
          <Link to='/category/child'>Child</Link>
        </li>
        <li>
          <Link to='/wishlist'>My Wishlist</Link>
        </li>
        {
          
        user ? <li>
          <Link to='/add-product'>Add Product</Link>
        </li> : null}
        
        {
          user ? <li>
          <Link to='/login' onClick={()=>{

            dispatch({
            type:"USER_LOGGED_OUT"
            })

          }}>Logout</Link>
          </li> : null
        }

        {
          user ? <li>
          <Link to='/users'>Users</Link>
          </li> : null
        }
        {!user ? 
        <>
            <li>
            <Link to='/signup'>Signup</Link>
            </li>
            <li>
            <Link to='/login'>Login</Link>
            </li>            
        </>
         :  null}
        {/* <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li> */}
        <li>
          <Link to='/cart'>
            <span className='totalOrders'>{orders.length}</span>
            <img src='cart.webp' className='cart-icon' />
          </Link>
        </li>
      </ul>
    </div>
  </nav>
  )
}

export default Header