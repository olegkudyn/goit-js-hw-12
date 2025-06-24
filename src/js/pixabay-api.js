import axios from 'axios';

export default function getImagesByQuery(query) {
  const API_KEY = '50886815-863f8f405658b4e0ea4896497';

  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return axios
    .get(`https://pixabay.com/api/`, { params })
    .then(response => response.data);
}
