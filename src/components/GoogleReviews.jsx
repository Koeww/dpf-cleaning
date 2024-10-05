// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import {getReviews} from '../ajax';

// const GoogleReviews = () => {
//     const [reviews, setReviews] = useState([]);

//     useEffect(() => {
//         const placeId = 'ChIJ0wjvRSeXpkARiqhljZ19hZI'; // Replace with your place ID
//         const apiKey = 'AIzaSyBwLtBto2KS99NWc7rT-8D7fPy64Hi07_8'; // Replace with your API key


//         const fetchReviews = async () => {
//             try {
//                 const response = await axios.get(
//                     `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`
//                 );
//                 setReviews(response.data.result.reviews);
//             } catch (error) {
//                 console.error('Error fetching reviews', error);
//             }
//         };

//         fetchReviews();
//     }, []);

//     return (
//         <div>
//             <h2>Google Reviews</h2>
//             <ul>
//                 {reviews.map((review, index) => (
//                     <li key={index}>
//                         <strong>{review.author_name}</strong>: {review.text}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default GoogleReviews;


import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GoogleMapsReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const apiKey = 'AIzaSyAb1wjFjUeyAEQN3GkADEGGTgWYeKaaXnE'; // Replace with your API key
        const placeId = 'ChIJ0wjvRSeXpkARiqhljZ19hZI'; // Replace with your business Place ID
        const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&fields=reviews&key=${apiKey}`;

        const response = await axios.get(url);

        console.log(response);
        
        if (response.data.result.reviews) {
          setReviews(response.result.reviews);
        }
      } catch (error) {
        console.error('Error fetching Google Maps reviews:', error);
      }
    };
        
    fetchReviews();

    console.log(reviews);
  }, [reviews]);

  return (
    <div>
      <h2>Google Maps Reviews</h2>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            <p><strong>{review.author_name}</strong></p>
            <p>Rating: {review.rating}</p>
            <p>{review.text}</p>
            <p><em>Posted on: {new Date(review.time * 1000).toLocaleDateString()}</em></p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GoogleMapsReviews;