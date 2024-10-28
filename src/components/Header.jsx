import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames';
import {routes} from '../routes';

const Header = () => {
    const [isVissibleMenu, setIsVissibleMenu] = useState(false);

    const onClickBurger = () => {
        setIsVissibleMenu(prevState => prevState ? false : true);
    };

	const menuClass = classNames('menu', {
		'menu-closed': !isVissibleMenu
	});

    return (
        <div className='Header'>
            <a href="/">
                <img src="/images/dpf-logo-new.svg" alt="logo" className="logo"/>
            </a>
            <div className='links-container'>
                <Link to={routes.home} className="underline-effect">Начало</Link>
                <Link to={routes.services} className="underline-effect">Услуги</Link>
                <Link to={routes.about} className="underline-effect">За нас</Link>
                <Link to={routes.contacts} className="underline-effect">Контакти</Link>
                <img src={`/images/${!isVissibleMenu ? 'burger' : 'slim-close-icon-white'}.svg`} className='burger' onClick={onClickBurger}/>
            </div>

            <ul className={menuClass}>
                <li>
                    <div className='upper-row'>
                        <img src="/images/phone.svg" alt="contact-icon" className='contacts-icon'/>
                        Телефон
                    </div>
                    <span className="contacts-span">+359 887 776 177</span>
                </li>
                <li>
                    <div className='upper-row'>   
                        <img src="/images/email.svg" alt="email-icon" className='contacts-icon'/>
                        Ймейл
                    </div>
                    <span className="contacts-span">dpf-cleaning@abv.bg</span>
                </li>
                <li>
                    <div className='upper-row'>
                        <img src="/images/location-pin.svg" alt="location-icon" className='contacts-icon'/>
                        Адрес
                    </div>
                    <span className="contacts-span">гр.Поморие, Околовръстен път Бургас - Варна, до КПП</span>
                </li>
            </ul>
            <style jsx>{`
                .Header {
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 1rem 2rem;
                    height: 3.5rem;
                }
                .logo {
                    display: flex;

                    height: 4rem;
                    transition: all 350ms ease-in-out;
                }
                .logo:hover {
                    filter: drop-shadow(0 0 2em #DE1D24);
                }
                .logo.react:hover {
                    filter: drop-shadow(0 0 2em #61dafbaa);
                }
                .links-container {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }
                .links-container a {
                    font-size: 4rem;
                }
                .burger {
                    display: none;
                    width: 2.5rem;
                    height: 2.5rem;
                    cursor: pointer;
                }
                .menu {
                    position: absolute;
                    top: 100%;
                    right: 0;
                    width: 400px;
                    max-height: 12rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    gap: 1rem;
                    margin: 0 auto;
                    padding: 3rem 2rem;
                    background-color: #333333;
                    overflow: hidden;
                    z-index: 1;
                    transition: max-height 150ms linear, opacity 250ms ease-in-out;
                    opacity: 1;
                    pointer-events: all;
                }
                .menu-closed {
                    max-height: 0;
                    opacity: 0;
                    pointer-events: none;
                }

                li {
                    list-style: none;
                    text-shadow: 1px 1px 2px black;
                    display: flex;
                    flex-direction: column; 
                    font-size: 1.5rem;
                }
                .upper-row {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                .contacts-span {
                    font-size: 1rem;
                }
                .contacts-icon{
                    width: 1.5rem;
                }
                @media screen and (max-width: 768px) {

                }
                @media screen and (max-width: 480px) {
                    .Header {
                        text-wrap: nowrap;
                        padding: var(--mobile-gap);
                    }
                    .links-container {
                        gap: 0.5rem;
                    }
                    .burger {
                        width: 2rem;
                        height: 2rem;
                    } 
                    .menu {
                        width: calc(100vw - 4*var(--mobile-gap));
                        text-wrap: wrap;
                        left: 0;
                        z-index: 10;
                    }
                    .underline-effect {
                        font-size: 1rem;
                    }
                    .logo {
                        display: none;
                    }
                }
            `}</style>
        </div>
    )
};

export default Header;