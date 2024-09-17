import React from 'react'

const ChangeThemeButton = () => {

    const handleClick = () => {
        const root = document.documentElement;
        
        if (root.classList.contains('dark-mode')) {
            root.classList.remove('dark-mode');
            root.classList.add('light-mode');
            localStorage.setItem('theme', 'light-mode');
        } else {
            root.classList.remove('light-mode');
            root.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        }

    }

    return (
        <button className='ChangeThemeButton' onClick={handleClick}>
            ChangeThemeButton

            <style jsx>{`
                .ChangeThemeButton {
                    position: absolute;
                    top: 50%;
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