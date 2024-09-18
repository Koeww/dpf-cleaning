import {useState} from "react";

const ChangeThemeButton = () => {
    const [iconURL, setIconURL] = useState('moon.svg');

    const setMoonIcon = () => {
        setIconURL('moon.svg');
    };

    const setSunIcon = () => {
        setIconURL('sun.svg');
    };

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
        <button className='ChangeThemeButton' onClick={handleClick}>
            <img src={`/images/${iconURL}`} alt="moon-icon" className='thememode-icon'/>

            <style jsx>{`
                .ChangeThemeButton {
                    position: sticky;
                    top: 50%;
                    left: 94%;
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
                .thememode-icon {
                    width: 2rem;
                    height: 2rem;
                }
            `}</style>
        </button>
    )
}

export default ChangeThemeButton