import {Link} from 'react-router-dom'
import './index.css'

const Header = () => {
  console.log('hi')
  return (
    <div className="header-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
          className="wave-image"
        />
        <p>Wave</p>
      </div>
      <ul className="routing-components">
        <li>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
