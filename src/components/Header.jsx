import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Logo from '../img/Logo/Logo 1/PNG.png'

const Header = () => {

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <header className={isChecked ? "index__header center show" : "index__header center"}>
      <nav className="container">
        <div>
          <Link href="#">
            <img height="76px" src={Logo} alt="Petra" />

          </Link>
        </div>
        <div>
          <ul className={isChecked ? "show" : ""}>
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

      <div className="hamburger">
        <input
          type="checkbox"
          role="button"
          aria-label="Display the menu"
          class="menu"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      </div>
    </header>
  )
}

export default Header