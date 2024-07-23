import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'https://pixabay.com/',
  params: {
    key: '42801322-2062a11e10d8e6d4e2ccea576',
  },
});

export async function getGallery(query, userPage) {
  const params = {
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    page: userPage,
    per_page: 5,
    safesearch: true,
  };

  const res = await axios.get('api/', { params });
  return res.data;
}
