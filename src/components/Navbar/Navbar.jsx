// import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo/logo.gif';
import './navbar.css';

const Navbar = () => {
  return (
    <div className='container overflow-hidden'>
      <nav
        className='navbar sticky-top navbar-expand-lg overflow-hidden'
        data-bs-theme='dark'
        data-aos='fade-down'
        data-aos-duration='1000'
      >
        <div className='container-fluid'>
          <NavLink className='navbar-brand ms-5' to='/'>
            <img src={logo} alt='logo' width={55} height={55} />
          </NavLink>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNavAltMarkup'
            aria-controls='navbarNavAltMarkup'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <div className='navbar-nav ms-auto'>
              <NavLink
                className={(navData) =>
                  navData.isActive ? 'nav-link active-route' : 'nav-link'
                }
                aria-current='page'
                to='/'
              >
                Home
              </NavLink>
              <NavLink
                className={(navData) =>
                  navData.isActive ? 'nav-link active-route' : 'nav-link'
                }
                to='/skills'
              >
                Skills
              </NavLink>
              <NavLink
                className={(navData) =>
                  navData.isActive ? 'nav-link active-route' : 'nav-link'
                }
                to='/projects'
              >
                Projects
              </NavLink>
              <NavLink
                className={(navData) =>
                  navData.isActive ? 'nav-link active-route' : 'nav-link'
                }
                to='/certificates'
              >
                Certificates
              </NavLink>
              <NavLink
                className={(navData) =>
                  navData.isActive ? 'nav-link active-route' : 'nav-link'
                }
                to='/contact'
              >
                Contact Me
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
