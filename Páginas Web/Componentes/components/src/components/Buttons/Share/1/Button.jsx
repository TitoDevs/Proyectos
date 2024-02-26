import React from 'react';
import { TfiSharethis } from 'react-icons/tfi'
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa'
import './Button.scss';

const Button = () => {
    return (
        <button className='btn'>
            <span className='btn-text'>
                <span>Share</span>
                <i>
                    <TfiSharethis/>
                </i>
            </span>
            <span className='btn-links'>
                <a href='https://www.twitter.es/' target='_blank' rel='noreferrer'>
                    <FaTwitter/>
                </a>
                <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'>
                    <FaInstagram/>
                </a>
                <a href='https://www.facebook.com/' target='_blank' rel='noreferrer'>
                    <FaFacebook/>
                </a>
            </span>
        </button>
    );
}

export default Button;
