import React from 'react'

const ContactBar = () => {
  return (
    <div className='ContactBar'>
        <a href="" className='contact-wrapper'>
            <img src="public/images/email.svg" alt="icon-email" />
            dpf-cleaning@abv.bg
        </a>
        <a href="" className='contact-wrapper'>
            <img src="public/images/clock.svg" alt="icon-clock" />
            09:00 - 18:00 dadada
        </a>
        <a href="" className='contact-wrapper'>
            <img src="public/images/location-pin.svg" alt="icon-location-pin" />
            гр.Поморие, Околовръстен път Бургас - Варна, до КПП
        </a>

        <style jsx>{`
            .ContactBar {
                display: flex;
                gap: 1rem;
                align-items: center;
                padding: 1rem;
                height: 1rem;
                background: #333333;
            }
            .contact-wrapper {
                display: flex;
                align-items: center;
                gap: 0.5rem;
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