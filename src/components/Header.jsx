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
            <Link to={routes.home} className="is-black">Почистване на ДПФ</Link>
            <Link to={routes.services} className="is-black">Услуги</Link>
            <Link to={routes.about} className="is-black">За нас</Link>
            <Link to={routes.contacts} className="is-black">Контакти</Link>
        </div>

        <style jsx>{`
            .Header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 1rem;
                height: 3.5rem;
            }

            .logo {
                display: flex;
                width: 18.75rem;
                height: 2.5rem;
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
        `}</style>
    </div>
  )
}

export default Header