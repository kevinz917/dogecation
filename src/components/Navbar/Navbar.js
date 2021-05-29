import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="body2">
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};

export default Navbar;
