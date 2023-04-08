import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector('.gallery');
const images = galleryItems
  .map(
    image =>
      `<li class="gallery__item"><a class=gallery__link href="${image.original}"><img class="gallery__image" src="${image.preview}" data-source="${image.original}" alt="${image.description}"></a></li>`
  )
  .join('');
gallery.insertAdjacentHTML('afterbegin', images);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});