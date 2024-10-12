import React from 'react'

const ContactBar = () => {


    const services = [
        {
            id: 1,
            href: '',
            text: '+359 887 776 177',
            icon: 'images/phone.svg'
        },
        {
            id: 2,
            href: '',
            text: 'dpf-cleaning@abv.bg',
            icon: 'images/email.svg'
        },
        {
            id: 3,
            href: '',
            text: '09:00 - 18:00',
            icon: 'images/clock.svg',
        },
        {
            id: 4,
            href: '',
            text: 'гр.Поморие, Околовръстен път Бургас - Варна, до КПП',
            icon: 'images/location-pin.svg',
        },
      ];

    return (
        <div className='ContactBar'>
            <div className='contact-urls-wrapper'>
                <a href="tel:0887776177" className='contact-wrapper'>
                    <img src="images/phone.svg" alt="icon-phone" />
                    <span className='text'>+359 887 776 177</span>
                </a>
                <a href="mailto:dpf-cleaning@abv.bg" className='contact-wrapper'>
                    <img src="/images/email.svg" alt="icon-email" />
                    <span className='text'>dpf-cleaning@abv.bg</span>
                </a>
                <a href='https://maps.app.goo.gl/UE6Qehp1pZTysC859' className='contact-wrapper'>
                    <img src="/images/location-pin.svg" alt="icon-location-pin" />
                    <span className='text'>гр.Поморие, Околовръстен път Бургас - Варна, до КПП</span>
                </a>
                <a href='' className='contact-wrapper'>
                    <img src="/images/clock.svg" alt="icon-clock" />
                    <span className='text'>09:00 - 18:00</span>
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
                @media screen and (max-width: 768px) {

                }
                @media screen and (max-width: 480px) {
                    img {
                        width: 1.5rem;
                        height: 1.5rem;
                    }
                    .text {
                        display: none;
                    }
                }
            `}</style>
        </div>
    )
}

export default ContactBar