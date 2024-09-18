import React from 'react'
import {Link} from 'react-router-dom'
import {routes} from '../routes'

const Hero = () => {

  return (
    <div className='Hero'>
        <div className='hero-wrapper'>
            <div className='hero-image'>
                <div className='h1-h2-wrapper'>
                    <h1>ПОЧИСТВАНЕ НА DPF/fap ФИЛТРИ  и катализатори на</h1>
                    <h2>всякакъв вид моторни превозни средства (мпс)</h2>
                </div>

                <img src="/images/iso_9001_new.svg" alt="hero" className='iso'/>

                <Link to={routes.contacts} className='is-green-box position-bottom-left'>
                    Свържете се с нас
                    <span className='additional-box'>+</span>
                </Link>
            </div>
        </div>

        <style jsx>{`
            .Hero {
                width: 100%;
                height: fit-content;
                height: 37.5rem;
            }
            .hero-wrapper {
                position: relative; 
                width: 100vw;
                height: fit-content;
            }
            .h1-h2-wrapper {
                color: white;
                position: absolute;
                top: 50%;
                left: 4rem; 
                transform: translateY(-50%);
            }
            .hero-image {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 37.5rem;
                background-size: cover;
                background-image: url('/images/home.png');
            }
            .iso {
                width: 7rem;
                height: 7rem;
                position: absolute;
                bottom: 1rem;
                right: 1rem;
            }
        `}</style>
    </div>
  )
}

export default Hero