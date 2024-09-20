import React from 'react'
import PopUp from './PopUp'

const Overlay = (props) => {

    const closeOverlay = () => props.setIsVisibleOverlay(false);

    const content = `
        <h3>Welcome to Our Website!</h3>
        <p>We are glad to have you here. This website uses cookies to enhance your experience.</p>
        <h4>Our Commitment to Privacy</h4>
        <p>Your privacy is important to us. We will never share your information with third parties without your consent.</p>
        <ul>
        <li>We use cookies to personalize content.</li>
        </ul>
        <p>For more details, please read our <a href="/privacy-policy">Privacy Policy</a>.</p>
    `;

    return (
        <div className='Overlay'>
            <PopUp
                closeOverlay={closeOverlay}
                title={'Cookie and Privacy Policy Agreement'}
                content={content}
                hasBackgroundBlack
            />

            <style jsx>{`
                .Overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                    background-color: rgba(0, 0, 0, 0.8);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 500;
                }
            `}</style>
        </div>
    )
}

export default Overlay