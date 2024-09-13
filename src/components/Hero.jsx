import React from 'react'

const Hero = () => {

  return (
    <div className='Hero'>
        <div className='hero-wrapper'>
            <div className='hero-image'>
                <div className='h1-h2-wrapper'>
                    <h1 className='is-max-size'>ПОЧИСТВАНЕ НА DPF/fap ФИЛТРИ  и катализатори на</h1>
                    <h2>всякакъв вид моторни превозни средства (мпс)</h2>
                </div>

                <img src="public/images/iso_9001_new.svg" alt="hero" className='iso'/>

                <a href="" className='is-green-box position-bottom-left'>
                    Свържете се с нас
                    <span className='additional-box'>+</span>
                </a>
            </div>
        </div>

        <style jsx>{`
            .Hero {
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
                background-image: url('public/images/home.png');
            }
            .additional-box {
                content: '+';
                margin-left: 1rem;
                background: #333333;
                padding: 0.75rem 1rem;
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