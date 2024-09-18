import React from 'react'

const AgreementButton = (props) => {

    const openPopUp = () => {
        props.setIsVisibleOverlay(true);
    };

    return (
        <div className='AgreementButton'>
            <img src="/images/privacy-policy.svg" alt="agreement-icon" className='agreement-icon'onClick={openPopUp}/>
            
            <style jsx>{`
                .AgreementButton {
                    position: sticky;
                    top: 88%;
                    left: 1rem;
                    background-color: var(--primary-color);
                    color: white;
                    width: fit-content;
                    height: fit-content;
                    padding: 1rem;
                    border: none;
                    border-radius: 50%;
                    cursor: pointer;
                    z-index: 1;
                }
                .agreement-icon {
                    width: 2rem;
                    height: 2rem;
                }
            `}</style>
        </div>
    )
}

export default AgreementButton