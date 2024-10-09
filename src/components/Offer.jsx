import React from 'react'

const Offer = () => {

  return (
    <div className="Offer">
        <div className='wrapper'>
          <img src="images/dpf-reinigung.svg" alt="dpf-reinigung" className='dpf-reinigung'/>


          <div className='text-wrapper'>
            DPF CLEANING
            <span className='additional-text'>
              from <span className='additional-text-price'>299BGN</span>
            </span>
          </div>
        </div>

        <ul>
          <li>
            <img src="images/tick.svg" alt="tick" />
            Почистване на фиксирана цена без (ддс).
          </li>

          <li>
            <img src="images/tick.svg" alt="tick" />
            Включва (Взимане и връщане).
          </li>

          <li>
            <img src="images/tick.svg" alt="tick" />
            12-Месечна Гаранция!
          </li>

          <li>
            <img src="images/tick.svg" alt="tick" />
            Включва тестов протокол.
          </li>

          <li>
            <img src="images/tick.svg" alt="tick" />
            ISO 9001 Certified
          </li>
        </ul>

        <style jsx>{`
			.Offer {
				color: #333333;
				position: absolute;
				top: 11rem;
				left: 2rem;
				width: 30rem;
				height: 25rem;
				background-color: white;
				padding: 2rem 1.5rem;
				display: flex;
				flex-direction: column;
				align-items: center;
				z-index: 9999;
			}
			.wrapper {
				display: flex;
				align-items: center;
				justify-content: center;
				gap: 1rem;
			}
			.text-wrapper {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				font-size: 25px;
				font-weight: bold;
			}
			.dpf-reinigung {
				width: 7.5rem;
				height: 7.5rem;
			}
			.additional-text {
				color: var(--primary-color);
				font-size: 20px;
			}
			.additional-text-price {
				font-size: 50px;
			}
			ul {
				list-style: none;
				margin-top: 1rem;
			}
			li {
				font-weight: 700;
				text-transform: uppercase;

			}
			li img {
				width: 1rem;
				height: 1rem;
				margin-right: 0.5rem;
			}
			@media screen and (max-width: 480px) {
				.Offer {
					padding: 1rem 0.75rem;
					height: fit-content;
				}
				.dpf-reinigung {
					width: 4.5rem;
					height: 4.5rem;
				}
				ul {
    				padding-inline-start: 0;
					text-wrap: wrap;
				}
			}
        `}</style>
    </div>
  )
}

export default Offer