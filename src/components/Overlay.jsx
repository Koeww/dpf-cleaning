import React from 'react'
import PopUp from './PopUp'

const Overlay = (props) => {

    const closeOverlay = () => {
        props.setIsVisibleOverlay(false);
    }

    return (
        <div className='Overlay'>
            <PopUp  closeOverlay={closeOverlay} />

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