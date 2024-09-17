import React from 'react'

const ChangeThemeButton = () => {

    const handleClick = () => {
        const root = document.documentElement;

        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {

            if (root.classList.contains('light-mode')) {
                root.classList.remove('light-mode');
                root.classList.add('dark-mode');
            } else {
                root.classList.remove('dark-mode');
                root.classList.add('light-mode');
            }
        } else {
            if (root.classList.contains('dark-mode')) {
                root.classList.remove('dark-mode');
                root.classList.add('light-mode');
            } else {
                root.classList.remove('light-mode');
                root.classList.add('dark-mode');
            }
        }
    };

    return (
        <button className='ChangeThemeButton' onClick={handleClick}>
            ChangeThemeButton

            <style jsx>{`
                .ChangeThemeButton {
                    position: absolute;
                    top: 90%;
                    right: 1rem;
                    background-color: var(--primary-color);
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    cursor: pointer;
                    z-index: 1;
                }  
                .ChangeThemeButton:hover {
                    transition: all 300ms ease-in-out;
                    background-color: var(--secondary-color);
                }   
            `}</style>
        </button>
    )
}

export default ChangeThemeButton