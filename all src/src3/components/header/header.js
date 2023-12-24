import { Link } from "react-router-dom"
import "./header.css"
export function Header(){
    return  <nav id="nav">  
    <div class="nav-wrapper">
      <Link to='/' class="brand-logo">Rosh Galeria</Link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/create-product">Create product</Link></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </div>
  </nav>
}