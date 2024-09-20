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
                    top: 88%;
                    left: 1rem;
                    background-color: var(--primary-color);
                    color: white;
                    width: 1.50rem;
                    height: 1.50rem;
                    padding: 0.75rem;
                    border: none;
                    border-radius: 50%;
                    cursor: pointer;
                    z-index: 1;
                }
                .agreement-icon {
                    width: 1.50rem;
                    height: 1.50rem;
                }
            `}</style>
        </div>
    )
}

export default AgreementButton