import axios from 'axios';

const API_KEY = 'UkiZEV2gdEdM51ypobPLQDSuEkjOhRQoKaEO9FbeUiWQmc9wFRu7coQt';
const BASE_URL = 'https://api.pexels.com/v1';

const fetchImages = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      params: { query: query },
      headers: {
        Authorization: `Bearer ${API_KEY}`
      }
      
    });
    return response.data.photos;
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
};

const fetchRandomImages = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/curated`, {
        headers: {
            Authorization: `Bearer ${API_KEY}`
          }
    });
    return response.data.photos;
  } catch (error) {
    console.error('Error fetching random images:', error);
    return [];
  }
};

export { fetchImages, fetchRandomImages };
