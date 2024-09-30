import React from 'react'

const AgreementButton = (props) => {

    const openPopUp = () => {
        props.setIsVisibleOverlay(true);
    };

    return (
        <div className='AgreementButton' onClick={openPopUp}>
            <img src="/images/privacy-policy.svg" alt="agreement-icon" className='agreement-icon'/>
            
            <style jsx>{`
                .AgreementButton {
                    position: fixed;
                    bottom: var(--desktop-gap);
                    left: var(--desktop-gap);
                    background-color: var(--primary-color);
                    color: white;
                    width: 1.5rem;
                    height: 1.5rem;
                    padding: 0.75rem;
                    border: none;
                    border-radius: 50%;
                    cursor: pointer;
                    z-index: 1;
                }
                .agreement-icon {
                    width: 1.5rem;
                    height: 1.5rem;
                }
            `}</style>
        </div>
    )
}

export default AgreementButton