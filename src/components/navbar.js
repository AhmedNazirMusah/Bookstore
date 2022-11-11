import { NavLink } from 'react-router-dom';
import image from '../image/user.png';

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
    <div className="img-png"><img className="image" src={image} alt="img" /></div>
  </nav>
);

export default Navbar;
