import React from 'react'

const Header = () => {
  return (
      <div className='Header'>
        <a href="/">
            <img src="public/images/advanpure_logo.svg" alt="logo" className="logo"/>
        </a>

        <div className='links-container'>
            <a href="" className="is-black">Почистване на ДПФ</a>
            <a href="" className="is-black">Услуги</a>
            <a href="" className="is-black">За нас</a>
            <a href="" className="is-black">Контакти</a>
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