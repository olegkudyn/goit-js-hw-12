import axios from 'axios';

export default async function getImagesByQuery(query, page = 1) {
  const API_KEY = '50886815-863f8f405658b4e0ea4896497';

  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    page: page,
    per_page: 15,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  const response = await axios.get(`https://pixabay.com/api/`, { params });
  
  return response.data;
  }
