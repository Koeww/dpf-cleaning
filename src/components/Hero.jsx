import React from 'react'
import {Link} from 'react-router-dom'
import {routes} from '../routes'

const Hero = () => {

    return (
        <div className='Hero'>
            <video className='video' autoPlay loop muted>
                <source src="images/intro-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className='h1-h2-wrapper'>
                <h1 className='h1-wrapper'>ПОЧИСТВАНЕ НА DPF/FAP филтри  и катализатори на</h1>
                <h2>всички видове моторни превозни средства (мпс)</h2>
            </div>

            <img src="/images/iso_9001_new.svg" alt="hero" className='iso' />

            <Link to={routes.contacts} className='is-green-box position-bottom-left'>
                Свържете се с нас
                <span className='additional-box'>+</span>
            </Link>

            <style jsx>{`
                .Hero {
                    width: 100vw;
                    height: fit-content;
                    position: relative; 
                }
                .video {
                    width: 100%;
                    height: 37.5rem;
                    object-fit: cover;
                }
                .h1-h2-wrapper {
                    color: inherit;
                    position: absolute;
                    top: 26rem;
                    left: 65rem;
                    transform: translateY(-50%);
                }
                .iso {
                    width: 10.75rem;
                    height: 10.75rem;
                    position: absolute;
                    top: 6rem;
                    right: var(--desktop-gap);
                }
                @media screen and (max-width: 480px) {
                    .video {
                        height: 20.5rem;
                    }
                    .h1-h2-wrapper {
                        width: 70vw;
                        position: absolute; 
                        top: 60%;
                        left: var(--mobile-gap);
                        margin: 0 var(--mobile-gap) auto 0;

                    }
                    .iso {
                        width: 6rem;
                        height: 6rem;
                        top: 20.5rem;
                        right: var(--mobile-gap);
                        transform: translateY(calc(-100% - var(--mobile-gap)));
                    }
                }
            `}</style>
        </div>
    )
}

export default Hero;