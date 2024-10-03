import React from "react"

const Hero2 = () => {

    return (
        <div className="Hero2">
            <img
                src="images/ad5000.webp"
                alt="ad5000"
                className="ad5000"
            />
            <div className="content">
                <h3>Разполагаме с машини от най - ново поколение.</h3>
                <div>Не е лошо момче, стига да не го виждаш често и тва-онова !</div>
            </div>
            
            <style jsx>{`
                .Hero2 {
                    position: relative;
                    height: 30rem;
                    width: 100vw;
                }
                img {
                    height: 30rem;
                    position: absolute;
                    top: 0;
                    right: 0;
                    z-index: 10;
                }
                .content {
                    position: absolute;
                    top: 50%;
                    left: 0;
                    text-align: left;
                    transform: translateY(-50%);
                    width: 100vw;
                    height: 10rem;
                    padding: 1.5rem var(--desktop-gap);
                    background-color: green;                
                }
            `}</style>
        </div>
    )
};

export default Hero2;