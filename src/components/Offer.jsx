import React, {useEffect} from 'react'
import {getReviews} from '../ajax'
import GoogleMapsReviews from './GoogleReviews'

const Offer = () => {

  // useEffect(() => {
  //   const params = {
  //     place_id: 'ChIJ0wjvRSeXpkARiqhljZ19hZI',          
  //     fields: 'reviews',          
  //     key: 'AIzaSyAb1wjFjUeyAEQN3GkADEGGTgWYeKaaXnE'              
  //   };
      
  //   getReviews(params)
  //     .then((res) => {
  //         console.log(res);
  //     })
  //     .catch((err) => {
  //         console.log(err);
  //     })
  // }, [])


  return (
    <div className="Offer">
        <div className='wrapper'>
          <img src="images/dpf-reinigung.svg" alt="dpf-reinigung" className='dpf-reinigung'/>


          <div className='text-wrapper'>
            DPF CLEANING
            <span className='additional-text'>
              from 299BGN
            </span>
          </div>
        </div>

        <ul>
          <li>
            <img src="images/tick.svg" alt="tick" />
            asdasdsd
          </li>

          <li>
            <img src="images/tick.svg" alt="tick" />
            asdasdsd
          </li>

          <li>
            <img src="images/tick.svg" alt="tick" />
            asdasdsd
          </li>

          <li>
            <img src="images/tick.svg" alt="tick" />
            asdasdsd
          </li>

          <li>
            <img src="images/tick.svg" alt="tick" />
            asdasdsd
          </li>

          <li>
            <img src="images/tick.svg" alt="tick" />
            asdasdsd
          </li>
        </ul>

        <GoogleMapsReviews/>

        <style jsx>{`
          .Offer {
            color: #333333;
            position: absolute;
            top: 20rem;
            left: 5rem;
            width: 20rem;
            height: 25rem;
            background-color: white;
            padding: 2rem 1.5rem;
            display: flex;
            flex-direction: column;
            align-items: center;
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
          }
          .dpf-reinigung {
            width: 2.5rem;
            height: 2.5rem;
          }
          .additional-text {
            color: var(--primary-color);
          }
          ul {
            list-style: none;
            margin-top: 1rem;
          }
          li img {
            width: 1rem;
            height: 1rem;
            margin-right: 0.5rem;
          }
        `}</style>
    </div>
  )
}

export default Offer