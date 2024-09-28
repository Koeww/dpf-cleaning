import React from 'react'

const WhyUs = () => {
  return (
    <div className='WhyUs'>
        
        <div>
            <div className='labels-wrapper'>
                <h3>НАШИТЕ УСЛУГИ</h3>
                <h4>Защо да изберете нас</h4>
            </div>

            <div className='photo-wrapper'>
                <ul>
                    <li>
                        <img src="/images/quality-white.svg" alt="quality" />
                        <h5>Гаранция за Качество</h5>
                        <p>Защото работим на високо професионално ниво</p>
                    </li>
                    <li className='has-background-green'>
                        <img src="/images/vehicle-white.svg" alt="vehicle" />
                        <h5>Всички Видове МПС</h5>
                        <p>Защото почистваме DPF филтри на всички видове леки коли, автомобили, бусове – леко товарни, селскостопански машини , влекачи и тежкотоварни машини, дори ако е превозното средство е над 7.5 тона.</p>
                    </li>

                    <li className='has-background-green'>
                        <img src="/images/tools-white.svg" alt="tools" />
                        <h5>Модерна Технология</h5>
                        <p>Защото машината ни е с едно от най-модерните и щадящи почиствания за DPF</p>
                    </li>

                    <li>
                        <img src="/images/gears-white.svg" alt="gears" />
                        <h5>Система за Изпичане</h5>
                        <p>Защото машината има уникална система за “изпичане”, която гарантира качество.</p>
                    </li>
                </ul>
            </div>
            
        </div>

        <style jsx>{`
            .WhyUs {
            }
            .photo-wrapper {
                display: flex;
            }
            .labels-wrapper {
                border-top: 0.0625rem solid var(--primary-color); 
                text-align: center;
                margin-bottom: 2rem;
            }
            .why-us-hero {
                width: 50vw;
                height: 37.5rem;
                background-size: cover;
            }
            ul {
                list-style: none;
                display: flex;
                flex-wrap: wrap;
                padding: 0;
                margin: 0;
            }
            li {
                width: calc(50% - 2rem);
                flex-grow: 1;
                padding: 1rem;
            }
            li img {
                width: 4rem;
                height: 4rem;
            }
        `}</style>
    </div>
  )
}

export default WhyUs