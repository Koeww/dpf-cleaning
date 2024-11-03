import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="wrapper">
                <div>
                    <div className='logo-wrapper'>
                    <img src="images/dpf-logo-new.svg" alt="logo" className='logo'/>
                    </div>
                    <ul>
                        <li> 
                            <span>Адрес</span> 
                            гр.Поморие, Околовръстен път Бургас - Варна, до КПП
                        </li>
                        <li> 
                            <span>Телефон</span> 
                            +359 887 776 177
                        </li>
                        <li> 
                            <span>Е-поща</span> 
                            dpf-cleaning@abv.bg
                        </li>
                    </ul>

                    <div className="icons-wrapper">
                        <img className="icons" src="images/facebook.svg" alt="face" />
                        <img className="icons" src="images/instagram.svg" alt="face" />
                    </div>
                </div>


                <div>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2938.0111357277206!2d27.60430661110116!3d42.57628612129419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a6972745ef08d3%3A0x92857d9d8d65a88a!2zRFBGIC0gQ2xlYW5pbmcg0J_QvtGH0LjRgdGC0LLQsNC90LUg0L3QsCDQlNCf0KQv0KTQkNCfINGE0LjQu9GC0YrRgCDQuCDQutCw0YLQsNC70LjQt9Cw0YLQvtGA0Lg!5e0!3m2!1sbg!2sbg!4v1728245160618!5m2!1sbg!2sbg" 
                        className='iframe'
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>

            <p>&copy;2024 SSI Ltd. All rights reserved.</p>

            <style jsx>{`
                footer {
                    display: flex;
                    flex-direction: column;
                    background-color: var(--background-color); 
                    color: #ffffff;            
                    padding: 2rem var(--desktop-gap);
                }
                .wrapper {

                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
                .logo-wrapper {
                    display: flex;
                    align-items: center;
                }
                .logo {
                    width: fit-content;
                    height: 5rem;
                }
                ul {
                    text-align: left;
                    color: inherit !important;
                    width: fit-content;
                    list-style-type: none;
                }
                li {
                    border-bottom: 0.0625rem solid var(--primary-color);
                    padding: 1rem 0 1rem 0;
                }
                li span {
                    font-weight: 900; 
                    color: var(--primary-color);
                    margin-right: 1rem;
                }
                .icons-wrapper {
                    display: flex;  
                    gap: 1rem;
                    padding-left: var(--desktop-gap);
                }
                .icons {
                    width: 2rem;
                    height: 2rem;
                }
                p {
                    align-self: center;
                }
                iframe {
                    width: 500px; 
                    height: 325px; 
                    border: 0;
                }
                @media screen and (max-width: 480px) {
                    footer {
                        padding: 1rem;
                    }
                    .wrapper {
                        align-items: center;
                        justify-content: center;
                        flex-direction: column;
                    }
                    .logo {
                        margin: 0 auto;
                    }
                    .icons {
                        margin: 0 auto;
                    }
                    ul, .icons-wrapper {
                        padding-inline-start: 0;
                        -webkit-padding-inline-start: 0;
                        margin-bottom: 1rem
                    }
                    ul {
                        max-width: calc(100vw - 2*var(--mobile-gap));
                        width: fit-content;
                    }
                    iframe {
                        width: calc(100vw - var(--desktop-gap)); 
                        border: 0;
                    }
                }
            `}</style>
        </footer>
    )
}

export default Footer