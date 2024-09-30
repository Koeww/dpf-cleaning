import React from 'react'
import {Link} from 'react-router-dom'

const ContactBar = () => {
  return (
    <div className='ContactBar'>
        <div className='contact-urls-wrapper'>
            <a href="mailto:dpf-cleaning@abv.bg" className='contact-wrapper'>
                <img src="/images/email.svg" alt="icon-email" />
                dpf-cleaning@abv.bg
            </a>
            <a href='' className='contact-wrapper'>
                <img src="/images/clock.svg" alt="icon-clock" />
                09:00 - 18:00
            </a>
            <a href='' className='contact-wrapper'>
                <img src="/images/location-pin.svg" alt="icon-location-pin" />
                гр.Поморие, Околовръстен път Бургас - Варна, до КПП
            </a>
        </div>

        <div className="icons-wrapper">
            <img src="images/instagram.svg" alt="insta" className='icon'/>
            <img src="images/facebook.svg" alt="face" className='icon'/>
        </div>

        <style jsx>{`
            .ContactBar {
                display: flex;
                gap: 1rem;
                align-items: center;
                justify-content: space-between;
                height: 1rem;
                background: #333333;
                border-bottom: 0.0625rem solid var(--primary-color); 
                padding: 1rem var(--desktop-gap);
            }
            .contact-urls-wrapper {
                display: flex;
                gap: 1rem;
                justify-content: space-between;
            }

            .contact-wrapper {
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }
            
            .icons-wrapper {
                display: flex;
                gap: 1rem;
                justify-content: space-between;
            }
            .icon {
                width: 2rem;
                height: 2rem;
            }

            .ContactBar a {
                transition: all 350ms ease-in-out;
            }

            img {
                width: 1rem;
                height: 1rem;
            }
        `}</style>
    </div>
  )
}

export default ContactBar