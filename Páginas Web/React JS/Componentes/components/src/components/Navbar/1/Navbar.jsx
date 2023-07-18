import React, { useState, useEffect } from 'react';
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { MdOutlineDesignServices, MdOutlineContactSupport } from 'react-icons/md'
import { BiHomeAlt } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'

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
            <BiHomeAlt className='navbar__icon' size={24}/>
            About
          </Link>
          <Link
            to="/services"
            activeClassName="active"
            className="navbar__link"
            onClick={handleLinkClick}
          >
            <MdOutlineDesignServices className='navbar__icon' size={24}/>
            Services
          </Link>
          <Link
            to="/contact-us"
            activeClassName="active"
            className="navbar__link"
            onClick={handleLinkClick}
          >
            <MdOutlineContactSupport className='navbar__icon' size={24}/>
            Contact Us
          </Link>
          <Link
            to="/sign-up"
            activeClassName="active"
            className="navbar__link"
            onClick={handleLinkClick}
          >
            <CgProfile className='navbar__icon' size={24}/>
            Sign Up
          </Link>
        </div>
        <div className="navbar__social-icons">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__social-icon"
          >
            <FiFacebook size={20} color="black" />
          </a>
          <a
            href="https://www.twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__social-icon"
          >
            <FiTwitter size={20} color="black" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__social-icon"
          >
            <FiInstagram size={20} color="black" />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
