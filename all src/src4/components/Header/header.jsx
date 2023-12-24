import React from 'react'
import { Link } from 'react-router-dom'

export function Header ()  {

  return (
        <nav>
  <div className="nav-wrapper">
    <Link to='/' className="brand-logo">
      Logo
    </Link>
    <ul id="nav-mobile" className="right hide-on-med-and-down">
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/createproduct">Create Products</Link>
      </li>
      <li>
        <Link to='/slider'>JavaScript</Link>
      </li>
    </ul>
  </div>
</nav>

  )
}
