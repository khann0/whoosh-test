import React from 'react';

import './Footer.scss';
import Logo from './Logo';
import Facebook from '../../assests/img/footer/Facebook.svg';
import VK from '../../assests/img/footer/Vk.svg';
import Youtube from '../../assests/img/footer/Youtube.svg';
import Instagram from '../../assests/img/footer/Instagram.svg';


function Footer() {
    return (
        <footer className='footer'>
            <div className="footer__container">
                <div className='footer__info'>
                    <div className='footer__about'>
                        <h5 className='footer__title'>About Whoosh</h5>
                        <p className='footer__text'>Express delivery of documents and parcels for organizations, express delivery of coresspondence, purchases and other goods.</p>
                    </div>
                    <div className='footer__menu'>
                        <h5 className='footer__title footer__title_underlined'>Menu</h5>
                        <ul>
                            <li><a className='footer__link' href="">About company</a></li>
                            <li><a className='footer__link' href="">Contact</a></li>
                            <li><a className='footer__link' href="">Rules</a></li>
                            <li><a className='footer__link' href="">FAQ</a></li>
                            <li><a className='footer__link' href="">Reviews</a></li>
                            <li><a className='footer__link' href="">Cargo transportations</a></li>
                            <li><a className='footer__link' href="">Tariffs</a></li>
                        </ul>
                    </div>
                    <div className='footer__services'>
                        <h5 className='footer__title footer__title_underlined'>Services</h5>
                        <ul>
                            <li><a className='footer__link' href="">Online stores</a></li>
                            <li><a className='footer__link' href="">Legal entity</a></li>
                            <li><a className='footer__link' href="">API Integration</a></li>
                            <li><a className='footer__link' href="">Contract</a></li>
                            <li><a className='footer__link' href="">Jobs</a></li>
                            <li><a className='footer__link' href="">Courier job</a></li>
                            <li><a className='footer__link' href="">The blog</a></li>
                        </ul>
                    </div>
                    <div className='footer__contacts'>
                        <h5 className='footer__title footer__title_underlined'>Contact us</h5>
                        <p className='footer__phone'>8 800 934 5959</p>
                        <p className='footer__address'>2545 W. Diversey Ave. 3rd Floor Chicago, IL 60647</p>
                        <div className='footer__social'>
                            <a href="#"><img src={Facebook} alt="" /></a>
                            <a href="#"><img src={VK} alt="" /></a>
                            <a href="#"><img src={Youtube} alt="" /></a>
                            <a href="#"><img src={Instagram} alt="" /></a>
                        </div>
                    </div>
                </div>

                <div className='footer__copyright'>
                    <div className="footer__separator">
                        <p>Made by</p>
                    </div>
                    <p>&copy; 2022. All rights reserved.</p>
                    <Logo />
                    <a href="#">Privacy policy</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;