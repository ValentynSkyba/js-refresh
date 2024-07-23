export function getGallery(query) {
  const BASE_URL = 'https://pixabay.com/';
  const END_PPOINT = 'api/';
  const API_KEY = '42801322-2062a11e10d8e6d4e2ccea576';
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 5,
    safesearch: true,
  });

  const url = `${BASE_URL}${END_PPOINT}/?${params}`;

  return fetch(url).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}
