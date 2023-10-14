import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../img/Logo/Logo 1/PNG.png'

const Header = () => {
  return (
    <header className="index__header center">
      <nav className="container">
        <div>
          <Link href="#">
            <img height="76px" src={Logo} alt="Petra" />

          </Link>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/">
                About us
              </Link>
            </li>
            <li>
              <Link to="/">
                Jobs
              </Link>
            </li>
            <li>
              <Link to="/">
                Press
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <span>
            <button className="btn-no-outline">Contact Us</button>
          </span>
        </div>
      </nav>
    </header>
  )
}

export default Header