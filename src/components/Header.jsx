import React from 'react'
import {Link} from 'react-router-dom'
import {routes} from '../routes'

const Header = () => {
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
        </div>

        <style jsx>{`
            .Header {
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
                gap: 1rem;
            }

            .links-container a {
                font-size: 4rem;
            }
        `}</style>
    </div>
  )
}

export default Header