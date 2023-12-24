import { Link } from "react-router-dom"

export function Header(){
    return  <nav>
    <div class="nav-wrapper">
      <Link to='/' class="brand-logo">Logo</Link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><Link to="/login">Login</Link></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </div>
  </nav>
}