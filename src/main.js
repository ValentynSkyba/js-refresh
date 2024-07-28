import { clearMarkup, renderImages } from './js/render-function';
import { getGallery } from './js/pixabay-api';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.search-form');
const loader = document.querySelector('.loader');
console.log(loader);

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  clearMarkup();

  const userQuery = e.target.elements.searchQuery.value.trim().split(' ');
  console.log(userQuery);
  const userWord = userQuery.filter(word => word).join('+');

  if (!userWord) {
    clearMarkup();

    return;
  }
  getGallery(userWord)
    .then(res => {
      if (res.hits.length === 0) {
      } else {
        renderImages(res.hits);
      }
    })
    .catch(console.log)
    .finally(() => {
      hideLoader();
    });

  e.target.reset();
}
