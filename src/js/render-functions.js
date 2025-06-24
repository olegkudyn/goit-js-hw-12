import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');
const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionPosition: 'bottom',
  captionsData: 'alt',
});

export default function createGallery(images) {
  const createMarkup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
    <li class="gallery-box">
        <a href="${largeImageURL}">
        <img src="${webformatURL}" alt="${tags}" width="300">
        </a>
        <div class="gallery-info ">
            <div class="gallery-stat">
                <span class="label">Likes</span>
                <span class="value">${likes}</span>
            </div>
            <div class="gallery-stat">
                <span class="label">Views</span>
                <span class="value">${views}</span>
            </div>
            <div class="gallery-stat">
                <span class="label">Comments</span>
                <span class="value">${comments}</span>
            </div>
            <div class="gallery-stat">
                <span class="label">Downloads</span>
                <span class="value">${downloads}</span>
            </div>
        </div>
    </li>`
    )
    .join('');

  gallery.innerHTML = createMarkup;
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('hidden');
}

export function hideLoader() {
  loader.classList.add('hidden');
}
