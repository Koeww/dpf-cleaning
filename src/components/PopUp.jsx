import React from 'react'

const PopUp = (props) => {

    return (
        <div className='PopUp'>
            <div className='popup-header'>
                <img src="/images/close-icon.svg" alt="close-icon" className='close-icon' onClick={props.closeOverlay} />
                PopUp header
            </div>

            <div className='popup-content'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quaerat sint tempore reprehenderit, tempora excepturi amet cupiditate ratione a voluptatem maxime in. Dignissimos repellendus excepturi aliquam temporibus exercitationem provident odit.
            </div>


            <style jsx>{`
            .PopUp {
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background-color: white;
                color: #333333;
                padding: 2rem;
                border-radius: 5px;
                z-index: 10;
            }

            .popup-header {
                font-size: 2rem;
                text-align: center;
            }

            .popup-content {
                padding: 1rem;
            }
            .close-icon {
                position: absolute;
                top: 1rem;
                right: 1rem;
                width: 2rem;
                height: 2rem;
                cursor: pointer;
            }

        `}</style>
        </div>
    )
}

export default PopUp