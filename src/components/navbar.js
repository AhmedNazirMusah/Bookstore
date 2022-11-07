import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="nav-container">
    <div className="main-title">Bookstore CMS</div>
    <ul className="main-nav">
      <li>
        <NavLink to="/">Books</NavLink>
      </li>
      <li>
        <NavLink to="/categories">Categories</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
