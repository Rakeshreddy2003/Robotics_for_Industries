import Logo from '../Assets/images/Logo.png';
import '../styles/Navbar.css';

function Header() {
  return (
    <header className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={Logo} alt="robokalam" height="50" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse nav-clicks" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="/" className="nav-link text-black">Solutions</a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link text-black">Products</a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link text-black">Industries Served</a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link text-black">Case Studies</a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link text-black">About Us</a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link text-black">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
