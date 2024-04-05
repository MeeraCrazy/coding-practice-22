// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-bar">
    <div className="logo-and-title-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo-image"
      />
      <p className="title">Wave</p>
    </div>
    <ul className="nav-items-list">
      <li className="link-item">
        <Link to="/" className="nav-item">
          Home
        </Link>
      </li>
      <li className="link-item">
        <Link to="/about" className="nav-item">
          About
        </Link>
      </li>
      <li className="link-item">
        <Link to="/contact" className="nav-item">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
