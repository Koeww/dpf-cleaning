import React from 'react'

const Useful = () => {
  return (
    <div className='Useful'>
        <h3>Полезна информация за DPF филтрите</h3>
        <h4>Какво е DPF филтър?</h4>

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
                width: 100%;
                padding: 2rem;
            }
            .cards-wrapper {
                display: flex;
                flex-wrap: wrap;
                gap: 3rem;
                margin-top: 1rem;
            }
            .cards {
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
                width: 15rem;
                background: var(--secondary-color);
                padding: 0.5rem 1rem;
                border-radius: 35px;
                box-shadow:  2px 2px 10px var(--primary-color);
            }
            ul {

                padding: 0;
                margin: 0;
            }
            li {
                margin-top: 0.5rem;
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