import { clearMarkup, renderImages } from './js/render-function';
import { getGallery } from './js/pixabay-api';
import axios from 'axios';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.search-form');
const loader = document.querySelector('.loader');
const loadMore = document.querySelector('.load-more');
const listGallery = document.querySelector('.gallery');

let page;
let query;
let maxPage;

form.addEventListener('submit', onSubmit);
loadMore.addEventListener('click', onLoadMore);

async function onSubmit(e) {
  e.preventDefault();
  clearMarkup();

  const userQuery = e.target.elements.searchQuery.value.trim().split(' ');
  query = userQuery.filter(word => word).join('+');
  page = 1;
  listGallery.innerHTML = '';

  if (!query) {
    clearMarkup();
    return;
  }

  try {
    const data = await getGallery(query, page);
    console.log(data);
    renderImages(data.hits);
    console.log(data.hits);
    if (data.totalHits <= 5) {
      return;
    } else {
      showButton();
    }

    e.target.reset();
  } catch (error) {
    console.log(error);
  }
}

async function onLoadMore(e) {
  page += 1;

  try {
    const data = await getGallery(query, page);
    renderImages(data.hits);
  } catch (error) {
    console.log(error);
  }
  scroll();
}
function showButton() {
  loadMore.classList.remove('is-hide');
}

function hideButton() {
  loadMore.classList.add('is-hide');
}

function scroll() {
  const image = listGallery.firstElementChild;
  const height = image.getBoundingClientRect().height;
  scrollBy({ behavior: 'smooth', top: height });
}
