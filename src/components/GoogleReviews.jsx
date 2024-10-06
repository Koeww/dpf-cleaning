import React, {useEffect, useState} from 'react';
import {getReviews} from '../ajax';

const GoogleMapsReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const place_id = 'ChIJ0wjvRSeXpkARiqhljZ19hZI';          
    const apiKey = 'AIzaSyAb1wjFjUeyAEQN3GkADEGGTgWYeKaaXnE';              
      
    getReviews(place_id, apiKey)
		.then((res) => {
			setReviews(res.data.result.reviews);
		})
		.catch((err) => {
			console.log(err);
		})
  }, [])

  return (
    <div>
		<h2>Google Maps Reviews</h2>	
		<ul>
			{reviews.map((review, index) => (
				<div>
					<img src={review.profile_photo_url} alt="" />

					<li key={index}>
						<p><strong>{review.author_name}</strong></p>
						<p>Rating: {review.rating}</p>
						<p>{review.text}</p>
						<p><em>Posted on: {new Date(review.time * 1000).toLocaleDateString()}</em></p>
					</li>
				</div>
			))}
		</ul>
    </div>
  );
};

export default GoogleMapsReviews;