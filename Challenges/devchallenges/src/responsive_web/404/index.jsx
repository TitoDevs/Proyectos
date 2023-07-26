import React from 'react';
import "./index.css";
import Logo from './img/Scarecrow.png';

const Index = () => {
    return (
        <section>
            <h2 className='logo__404'>404 NOT FOUND</h2>
            <div className='inner__section'>
                <div className='img'>
                    <img className='img__logo' src={Logo} alt='logo'></img>
                </div>
                <div className='info'>
                    <h1 className='title'>I have bad news for you</h1>
                    <p className='description'>The page you are looking for might be removed or is temporarily unavailable</p>
                    <button className='btn__back'>BACK TO HOMEPAGE</button>
                </div>
            </div>
            <p className='footer'>created by titodev - devchallenges.io</p>
        </section>
    );
}

export default Index;
