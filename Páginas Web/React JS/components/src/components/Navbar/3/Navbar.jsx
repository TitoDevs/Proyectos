import React, { useState, useEffect } from 'react';
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { NavLink as Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const handleLinkClick = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (showMenu && window.innerWidth > 768) {
        setShowMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [showMenu]);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar__logo">
          Brand
        </Link>
        {showMenu ? <AiOutlineClose className="navbar__bars" onClick={handleMenuClick}/> : <HiOutlineMenuAlt2 className="navbar__bars" onClick={handleMenuClick} />}
        <div className={`navbar__menu ${showMenu ? 'active' : ''}`}>
          <Link
            to="/about"
            activeClassName="active"
            className="navbar__link"
            onClick={handleLinkClick}
          >
            About
          </Link>
          <Link
            to="/services"
            activeClassName="active"
            className="navbar__link"
            onClick={handleLinkClick}
          >
            Services
          </Link>
          <Link
            to="/contact-us"
            activeClassName="active"
            className="navbar__link"
            onClick={handleLinkClick}
          >
            Contact Us
          </Link>
          <Link
            to="/sign-up"
            activeClassName="active"
            className="navbar__link"
            onClick={handleLinkClick}
          >
            <button className='navbar__btn'>
              Sign Up
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
