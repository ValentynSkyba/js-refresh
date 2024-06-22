import { images } from './images.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const container = document.querySelector('.gallery');
console.log(container);

const { preview, original, description } = images;

function imageTemplate({ preview, original, description }) {
  return `  <li class="gallery-item">
        <a class="gallery-link" href='${original}'>
          <img
            class="gallery-image"
            src='${preview}'
            alt='${description}'
          />
        </a>
      </li>`;
}

function imagesTemplate(pictures) {
  return pictures.map(imageTemplate).join('');
}

export function render(pictures) {
  const markup = imagesTemplate(pictures);
  container.insertAdjacentHTML('beforeend', markup);
}

render(images);

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 1000,
});
