import React from 'react'
import './Sidebar.css'
import Logo from './../../assets/logo.svg'

const Sidebar = () => {
  return (
    <div>
      <aside className='aside'>
          {/* <a href="#home" className='nav__logo'>
            <img src={Logo} alt="logo" />
          </a> */}

          <nav className='nav'>
            <div className="nav__menu">
              <ul className="nav__list">
                <li className="nav__item">
                  <a href="#" className='nav__link'>
                    <i className="icon-home"></i>
                  </a>
                </li>

                <li className="nav__item">
                  <a href="#" className='nav__link'>
                    <i className="icon-user-following"></i>
                  </a>
                </li>

                <li className="nav__item">
                  <a href="#" className='nav__link'>
                    <i className="icon-briefcase"></i>
                  </a>
                </li>

                <li className="nav__item">
                  <a href="#" className='nav__link'>
                    <i className="icon-graduation"></i>
                  </a>
                </li>

                <li className="nav__item">
                  <a href="#" className='nav__link'>
                    <i className="icon-layers"></i>
                  </a>
                </li>

                <li className="nav__item">
                  <a href="#" className='nav__link'>
                    <i className="icon-note"></i>
                  </a>
                </li>

                <li className="nav__item">
                  <a href="#" className='nav__link'>
                    <i className="icon-bubble"></i>
                  </a>
                </li>

              </ul>
            </div>
          </nav>

          <div className="nav__footer">
            <span className='copyright'>&copy; 2023</span>
          </div>
      </aside>
    </div>
  )
}

export default Sidebar