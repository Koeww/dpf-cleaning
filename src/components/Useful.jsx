const Useful = () => {

  return (
    <div className='Useful'>
        <h3>Полезна информация за DPF филтрите</h3>
        <h4>Какво е DPF филтър?</h4>

        <div className="moving-elements-wrapper">
            <img src="images/dpf-filter-green.svg" alt="el1" className="moving-element el1" />
            {/* <img src="images/french.svg" alt="el2" className="moving-element el2" />
            <img src="images/gear.svg" alt="el3" className="moving-element el3" />
            <img src="images/screw-driver.svg" alt="el4" className="moving-element el4" />
            <img src="images/wrench.svg" alt="el5" className="moving-element el5" /> */}
        </div>

        <div className='cards-wrapper'>
            <div className="cards">
                <h6>    
                    Неподдръжането на DPF филтрите може да доведе до    
                </h6>
                <ul>
                    <li>Загуба на мощност на двигателя</li>
                    <li>Увеличен разход на гориво</li>
                    <li>Възможност за сериозни повреди на двигателя</li>
                    <li>Повишени емисии и глоба от органите за контрол на замърсяването</li>
                </ul>
            </div>

            <div className="cards">
                <h6>
                    Как да разберете, че вашият DPF филтър има проблеми?
                </h6>
                <ul>
                    <li>Светеща лампа на таблото за управление</li>
                    <li>Нарастващ разход на гориво</li>
                    <li>Загуба на мощност</li>
                    <li>Повишени емисии</li>
                </ul>
            </div>

            <div className="cards">
                <h6>
                    Какво предлагаме?
                </h6>
                <ul>
                    <li>Професионално почистване на DPF филтри</li>
                    <li>Проверка на системата и диагностика</li>
                    <li>Съвети за правилна поддръжка</li>
                </ul>
            </div>
        </div>


        <style jsx>{`
            .Useful {    
                display: flex;
                flex-direction: column;
                align-items: center;
                position: relative;
                width: 100%;
                padding: 2rem;
            }

            .moving-elements-wrapper {
                width: 100%;
                height: 175px;
                position: absolute;
                top: 50%;
                left: 0;
            }

            @keyframes move {
                0% {
                    transform: translateX(100vw)  translateY(0);
                }
                25% {
                    transform: translateX(0vw) translateY(2rem);
                }
                50% {
                    transform: translateX(75rem) translateY(-5rem);
                }
                75% {
                    transform: translateX(25rem) translateY(5rem);
                }
                100% {
                    transform: translateX(90rem) translateY(-2rem);
                }
            }
 
            .moving-element {
                display: inline-block;
                width: 50px;
                height: 50px;
                position: absolute;
                white-space: nowrap;
                animation: move infinite linear;
            }

            /* Randomized animation duration and delay */
            .el1 {
                animation-duration: 20s;
                animation-delay: 0.2s;
            }
            .el2 {
                animation-duration: 22s;
                animation-delay: 0.25s;
            }
            .el3 {
                animation-duration: 24s;
                animation-delay: 0.30s;
            }
            .el4 {
                animation-duration: 26s;
                animation-delay: 0.35s;
            }
            .el5 {
                animation-duration: 28s;
                animation-delay: 0.4s;
            }

            .cards-wrapper {
                display: flex;
                flex-wrap: wrap;
                gap: 5rem;
                margin-top: 1rem;
                z-index: 10;
            }

            .cards {
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
                width: 15rem;
                padding: 0.5rem 1rem;
                background: rgba(255, 255, 255, 0.03);
                border-radius: 35px;
                backdrop-filter: blur(3px) saturate(180%);
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
                border: 1px solid rgba(255, 255, 255, 0.25);
            }

            ul {
                padding: 0;
                margin: 0;
            }

            li {
                margin-top: 0.5rem;
                list-style: none;
                position: relative;
            }

            li:not(:first-child)::before {
                content: "";
                position: absolute;
                top: -0.25rem;
                left: 50%;
                background-color: white;
                transform: translateX(-50%);
                width: 1.875rem;
                height: 0.25rem;
            }

            h6 {
                font-size: 1.5rem;
                margin: 1rem 0 1rem 0;
            }
        `}</style>
    </div>
  )
}

export default Useful

        // <style jsx>{`
        //     .Useful {    
        //         display: flex;
        //         flex-direction: column;
        //         align-items: center;
        //         position: relative;
        //         width: 100%;
        //         padding: 2rem;
        //     }

        //     .moving-elements-wrapper {
        //         width: 100%;
        //         height: 175px;
        //         position: absolute;
        //         top: 50%;
        //         left: 0;
        //         background-color: red;
        //     }

        //     @keyframes move {
        //         0% {
        //             transform: translateX(100%) translateY(0);
        //         }
        //         25% {
        //             transform: translateX(-10%) translateY(10%);
        //         }
        //         50% {
        //             transform: translateX(-50%) translateY(-20%);
        //         }
        //         75% {
        //             transform: translateX(-80%) translateY(30%);
        //         }
        //         100% {
        //             transform: translateX(-100%) translateY(-10%);
        //         }
        //     }
 
        //     .moving-element {
        //         display: inline-block;
        //         width: 50px;
        //         height: 50px;
        //         display: inline-block;
        //         white-space: nowrap;
        //         animation: move infinite linear;
        //     }

        //     .el1 {
        //         animation-duration: infinite;
        //         animation-delay: 0s;
        //     }

        //     .el2 {
        //         animation-duration: 10s;
        //         animation-delay: 1s;
        //     }

        //     .el3 {
        //         animation-duration: 12s;
        //         animation-delay: 1.5s;
        //     }
        //     .el4 {
        //         animation-duration: 14s;
        //         animation-delay: 2.5s;
        //     }
        //     .el5 {
        //         animation-duration: 16s;
        //         animation-delay: 3s;
        //     }


        //     .cards-wrapper {
        //         display: flex;
        //         flex-wrap: wrap;
        //         gap: 5rem;
        //         margin-top: 1rem;
        //         z-index: 10;
        //     }
        //     .cards {
        //         display: flex;
        //         flex-direction: column;
        //         align-items: center;
        //         text-align: center;
        //         width: 15rem;
        //         padding: 0.5rem 1rem;
        //         background: rgba(255, 255, 255, 0.25); /* Slightly more transparent */
        //         border-radius: 35px;
        //         backdrop-filter: blur(15px) saturate(180%);
        //         box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25); /* Soft shadow for depth */
        //         border: 1px solid rgba(255, 255, 255, 0.18); /* Frosted border */
        //     }
        //     ul {
        //         padding: 0;
        //         margin: 0;
        //     }
        //     li {
        //         margin-top: 0.5rem;
        //         list-style: none;
        //         position: relative;
        //     }

        //     li:not(:first-child)::before {
        //         content: "";
        //         position: absolute;
        //         top: -0.25rem;
        //         left: 50%;
        //         background-color: white;
        //         transform: translateX(-50%);
        //         width: 1.875rem;
        //         height: 0.25rem;
        //     }

        //     h6 {
        //         font-size: 1.5rem;
        //         margin: 1rem 0 1rem 0;
        //     }
        // `}</style>