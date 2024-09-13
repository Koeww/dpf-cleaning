import React from 'react'

const ServicesComponent = () => {
  return (
    <div className='ServicesComponent'>
        <img src="public/images/contact.png" alt="contact-photo" className='services-hero'/>

        <style jsx>{`
            .ServicesComponent { 
                width: 100%;
            }
			.services-hero {
				width: 100%;
				height: fit-content;
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
			}
        `}</style>
    </div>
  )
}

export default ServicesComponent