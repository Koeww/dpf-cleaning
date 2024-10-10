import React from 'react'
import classNames from 'classnames'

const PopUp = ({closeOverlay, title, content}) => {

    const popUpClasses = classNames('PopUp');

    const setCookie  = (cname, cvalue, exdays) => {
        const d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    };

    const agree = () => setCookie('cookieConsent', 'true', 7);

    return (
        <div className={popUpClasses}>
            <div className='popup-header'>
                <img src="/images/close-icon.svg" alt="close-icon" className='close-icon' onClick={closeOverlay} />
                {title}
            </div>

            <div className='popup-content' dangerouslySetInnerHTML={{ __html: content }} />

            <div className='popup-footer'>
                <button onClick={agree}>Agree</button>
                <button onClick={closeOverlay}>Cancel</button>
            </div>

            <style jsx>{`
                .PopUp {
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    text-align: center;
                    transform: translate(-50%, -50%);
                    background-color: white;
                    color: #333333;
                    padding: 2rem;
                    border-radius: 5px;
                    z-index: 10;
                }

                .popup-header {
                    font-size: 2.5rem;
                    font-weight: bold;
                    text-align: center;
                }

                .popup-content {
                    padding: 1rem;
                }
                .popup-footer {
                    display: flex;
                    justify-content: space-around;
                    padding: 1rem 0;
                }

                .close-icon {
                    position: absolute;
                    top: 1rem;
                    right: 1rem;
                    width: 2rem;
                    height: 2rem;
                    cursor: pointer;
                }
                @media screen and (min-width: 480px) {
                    .PopUp {
                        max-height: 20rem;
                        height: 20rem;
                        max-width: calc(100vw - 2*var(--mobile-gap));
                        overflow-y: hidden;
                    };
                }
            `}</style>
        </div>
    )
}

export default PopUp