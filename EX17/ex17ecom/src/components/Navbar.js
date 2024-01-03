import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: '#f8c291' }}>
      <div className="container">
        <a className="navbar-brand" href="/home" style={{ color: 'chocolate' }}>Little Village</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/home" style={{ color: 'chocolate' }}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/aboutus" style={{ color: 'chocolate' }}>About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/gallery" style={{ color: 'chocolate' }}>Gastronomic Gems</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contactus" style={{ color: 'chocolate' }}>Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login" style={{ color: 'chocolate' }}>Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
}

export default Navbar;