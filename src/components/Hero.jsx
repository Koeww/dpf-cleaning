import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../routes'

const Hero = () => {

    return (
        <div className='Hero'>
            <video className='video' autoPlay loop muted>
                <source src="images/intro-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className='h1-h2-wrapper'>
                <h1>ПОЧИСТВАНЕ НА DPF/FAP филтри  и катализатори на</h1>
                <h2>всякакъв вид моторни превозни средства (мпс)</h2>
            </div>

            <img src="/images/iso_9001_new.svg" alt="hero" className='iso' />

            <Link to={routes.contacts} className='is-green-box position-bottom-left'>
                Свържете се с нас
                <span className='additional-box'>+</span>
            </Link>

            <style jsx>{`
                .Hero {
                    width: 100%;
                    height: fit-content;
                    position: relative; 
                }
                .video {
                    width: 100%;
                    height: 37.5rem;
                    object-fit: cover;
                }
                .h1-h2-wrapper {
                    color: white;
                    position: absolute;
                    top: 50%;
                    left: var(--desktop-gap); 
                    transform: translateY(-50%);
                }
                .iso {
                    width: 7rem;
                    height: 7rem;
                    position: absolute;
                    bottom: var(--desktop-gap);
                    right: var(--desktop-gap);
                }
            `}</style>
        </div>
    )
}

export default Hero;