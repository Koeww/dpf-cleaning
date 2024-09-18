import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import classNames from 'classnames';
import {routes} from '../routes'

const Header = () => {
    const [isVissibleMenu, setIsVissibleMenu] = useState(false);

    useEffect(() => {
        console.log(isVissibleMenu)

    }, [isVissibleMenu])    

    const onClickBurger = () => {
        setIsVissibleMenu(prevState => prevState ? false : true);
    };

	const menuClass = classNames('menu', {
		'menu-vissible': isVissibleMenu,
	});

    return (
        <div className='Header'>
            <a href="/">
                <img src="public/images/advanpure_logo.svg" alt="logo" className="logo"/>
            </a>

            <div className='links-container'>
                <Link to={routes.home} className="underline-effect">Почистване на ДПФ</Link>
                <Link to={routes.services} className="underline-effect">Услуги</Link>
                <Link to={routes.about} className="underline-effect">За нас</Link>
                <Link to={routes.contacts} className="underline-effect">Контакти</Link>
                <img src="public/images/burger.svg" alt="burger" className='burger' onClick={onClickBurger}/>
            </div>


            <ul className={menuClass}>
                <li>
                    <div className='upper-row'>
                        <img src="/images/phone.svg" alt="contact-icon" className='contacts-icon'/>
                        Телефон
                    </div>
                    <span className="contacts-span">0000000</span>
                </li>
                <li>
                    <div className='upper-row'>   
                        <img src="/images/email.svg" alt="email-icon" className='contacts-icon'/>
                        Ймейл
                    </div>
                    <span className="contacts-span">000000</span>
                </li>
                <li>
                    <div className='upper-row'>
                        <img src="/images/location-pin.svg" alt="location-icon" className='contacts-icon'/>
                        Адрес
                    </div>
                    <span className="contacts-span">000000</span>
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
                    width: 18.75rem;
                    height: 2.5rem;
                    transition: all 350ms ease-in-out;
                }
                .logo:hover {
                    filter: drop-shadow(0 0 2em #1ab502);
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
                    width: 2.5rem;
                    height: 2.5rem;
                    cursor: pointer;
                }
                .menu {
                    position: absolute;
                    top: 100%;
                    right: 0;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    gap: 1rem;
                    padding: 3rem 2rem;
                    background-color: #333333;
                    color: white;
                    z-index: 1;
                    transitions: all 1s ease-in-out;
                }
                .menu-vissible {
                    display: none
                }

                li {
                    list-style: none;
                    text-shadow: 1px 1px 2px black;
                    display: flex;
                    flex-direction: column; 
                }
                .upper-row {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                .contacts-span {
                    font-size: 13px;
                }
                .contacts-icon{
                    width: 1.5rem;
                }
                 
            `}</style>
        </div>
    )
}

export default Header