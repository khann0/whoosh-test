import React, { Fragment, useState, useEffect } from 'react';
import Media from 'react-media';
import classNames from 'classnames';

import Logo from '../../assests/img/Logo.svg';
import Lock from '../../assests/img/Subtract.svg';
import Profile from '../../assests/img/header/Profile.svg';

import Menu from '../../assests/img/header/Menu.svg';
import CloseMenu from '../../assests/img/header/CloseMenu.svg';
import PopUpCity from '../PopUpCity';

import './Header.scss';

import DB from '../../assests/db.json';

export default function Header() {
    const [mobile, setMobile] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className="header">
            <div className='header__container'>
                <a href="#" className="header__logo">
                    <img src={Logo} alt="logo"></img>
                </a>

                <Media query="(max-width: 767.98px)">
                    {(matches) => {
                        if (matches) {
                            setMobile(true);
                        }
                        else {
                            setMobile(false);
                            setShowMenu(false);
                        }
                    }}
                </Media>

                {mobile &&
                    <img
                        onClick={() => setShowMenu(!showMenu)}
                        className='header__menu'
                        src={showMenu ? CloseMenu : Menu}
                    />
                }

                <div className={classNames('header__menu-items', { 'shown': mobile && showMenu })}>
                    <PopUpCity cities={DB.cities} />

                    <div className='header__tracker'>
                        <input type="text" placeholder='Track a Package'></input>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14ZM7 12.6667C10.2217 12.6667 12.6667 10.2217 12.6667 7C12.6667 3.77834 10.2217 1.33333 7 1.33333C3.77834 1.33333 1.33333 3.77834 1.33333 7C1.33333 10.2217 3.77834 12.6667 7 12.6667Z" fill="#B7C6E7" />
                            <path d="M7.33325 10L10.6666 8.66667V5.33333L7.33325 6.51254V10Z" fill="#B7C6E7" />
                            <path d="M6.66675 10L3.33341 8.66667V5.33333L6.66675 6.51254V10Z" fill="#B7C6E7" />
                            <path d="M6.99992 3.33333L3.33325 4.66667L6.99992 6L10.6666 4.66667L6.99992 3.33333Z" fill="#B7C6E7" />
                            <path d="M11.9523 11L16 15.0477L15.0477 16L11 11.9523L11.9523 11Z" fill="#B7C6E7" />
                        </svg>
                    </div>

                    <div className='header__buttons'>
                        <a>Send a Parcel</a>

                        <a>Become a Courier</a>

                        {mobile &&
                            <Fragment>
                                <a>Affiliate Program</a>
                                <a>Help &amp; Support</a>
                                <input className='button' value='Take a complex order'></input>
                            </Fragment>}
                    </div>
                </div>
                <div className='header__profile'>
                    <img
                        src={mobile ? Profile : Lock}
                        alt="profile"></img>
                </div>
            </div>
        </header >
    )
}
