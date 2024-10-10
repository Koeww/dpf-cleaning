const Useful = () => {

  return (
    <div className='Useful'>
        <h3>Полезна информация за DPF филтрите</h3>
        <h4>Какво е DPF филтър?</h4>

        <div className="moving-elements-wrapper">
            <img src="images/dpf-filter-green.svg" alt="el1" className="moving-element el1" />
            <img src="images/french.svg" alt="el2" className="moving-element el2" />
            <img src="images/gear.svg" alt="el3" className="moving-element el3" />
            <img src="images/screw-driver.svg" alt="el4" className="moving-element el4" />
            <img src="images/wrench.svg" alt="el5" className="moving-element el5" />
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
                padding: var(--desktop-gap);
            }

            .moving-elements-wrapper {
                width: calc(100vw - 2*var(--desktop-gap));
                height: 175px;
                position: absolute;
                top: 50%;
                left: 0;
            }
 
            .moving-element {
                width: 50px;
                height: 50px;
                position: absolute;
            }

            .el1 {
                top: 11rem;
                left: 1rem;
            }
            .el2 {
                top: 22rem;
                left: 1rem;
            }
            .el3 {
                top: 14rem;
                left: 5rem;
            }
            .el4 {
                top: 12rem;
                left: 9rem;
            }
            .el5 {
                top: 5rem;
                left: 4rem;
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
            @media screen and (min-width: 480px) { 
                .moving-elements-wrapper {
                    width: calc(100vw - 2*var(--mobile-gap));
                }
                .cards-wrapper {
                    display: flex; 
					width: 16rem;
					overflow: scroll;
					scroll-snap-type: x proximity;
                }
                .cards {
                    width: 16rem;
					scroll-snap-align: center;
					flex-shrink: 0;
                }
            }
        `}</style>
    </div>
  )
}

export default Useful;