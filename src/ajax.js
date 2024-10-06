import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://maps.googleapis.com/maps',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});

export const getReviews = (placeId, apiKey) => axiosInstance.get(`/api/place/details/json?placeid=${placeId}&fields=reviews&key=${apiKey}`);