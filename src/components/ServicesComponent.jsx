import React from 'react'
import {Link} from 'react-router-dom'
import {routes} from '../routes'
import Counters from '../components/Counters'

const ServicesComponent = () => {
  return (
    <div className='ServicesComponent'>
		<div className='text-wrapper'>
			ПОЧИСТВАНЕ НА <span className='DPF'>DPF/FAP</span> филтри и катализатори на всякакъв вид моторни превозни средства (МПС) в гр.ПОМОРИЕ
			{/* <Link to={routes.contacts} className='is-green-box position-bottom-right'>
				Свържете се с нас
				<span className='additional-box-reversed'>+</span>
			</Link> */}
		</div>
		{/* <img src="/images/contact.png" alt="contact-photo" className='services-hero'/> */}
		{/* <h3>Професионално почистване</h3>
		<h4>ПОДАРЕТЕ НОВ ЖИВОТ НА ВАШИЯТ dpf ФИЛТЪР и катализатор чрез професионалното почистване при нас.</h4> */}


        <style jsx>{`
            .ServicesComponent { 
                width: 100%;
				position: relative;
            }
			.text-wrapper {
				position: relative;
				color: white;
				font-size: 2rem;
                background: #333333;
				padding: 4rem var(--desktop-gap);
			}
			.DPF {
				color: #DE1D24;
			}
			{/* .services-hero {
				width: 100%;
				height: fit-content;
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
			} */}
			{/* h3 {
				position: absolute;
				top: 50%;
				left: 3rem;
			}
			h4 {
				position: absolute;
				top: 60%;
				left: 3rem;
			} */}
        `}</style>
    </div>
  )
}

export default ServicesComponent