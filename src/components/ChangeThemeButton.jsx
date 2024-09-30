import {useState} from "react";

const ChangeThemeButton = () => {
    const [iconURL, setIconURL] = useState('moon.svg');

    const setMoonIcon = () => setIconURL('moon.svg');

    const setSunIcon = () => setIconURL('sun.svg');

    const handleClick = () => {
        const root = document.documentElement;

        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {

            if (root.classList.contains('light-mode')) {
                setMoonIcon();
                root.classList.remove('light-mode');
                root.classList.add('dark-mode');
            } else {
                setSunIcon();
                root.classList.remove('dark-mode');
                root.classList.add('light-mode');
            }
        } else {
            if (root.classList.contains('dark-mode')) {
                setSunIcon();
                root.classList.remove('dark-mode');
                root.classList.add('light-mode');
            } else {
                setMoonIcon();
                root.classList.remove('light-mode');
                root.classList.add('dark-mode');
            }
        }
    };

    return (
        <div className='ChangeThemeButton' onClick={handleClick}>
            <img src={`/images/${iconURL}`} alt="moon-icon" className='thememode-icon'/>

            <style jsx>{`
                .ChangeThemeButton {
                    position: fixed;
                    bottom: var(--desktop-gap);
                    right: var(--desktop-gap);
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
                .ChangeThemeButton:hover {
                    transition: all 300ms ease-in-out;
                    background-color: var(--secondary-color);
                }   
                .thememode-icon {
                    width: 1.5rem;
                    height: 1.5rem;
                }
            `}</style>
        </div>
    )
}

export default ChangeThemeButton