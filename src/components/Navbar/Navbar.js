import { store } from 'index';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../../common/components/button/Button';
import './Navbar.scss';

const mapStateToProps = (store) => {
  return {
    address: store.eth.address,
  };
};

const Navbar = (props) => {
  const { address } = props;

  console.log(address);

  return (
    <div className="navbar-container">
      <div className="body2 horizontal-container">
        <div className="navlink">
          <Link to="/">Home</Link>
        </div>
        <div className="navlink">
          <Link to="/profile">Profile</Link>
        </div>
      </div>

      <div className="body2 address-container">{address}</div>
    </div>
  );
};

export default connect(mapStateToProps)(Navbar);

// <Button secondary>Connect to wallet</Button>
