import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

function createGalleryItem({ preview, original, description }) {
  return `<div class="gallery__item">
            <a class='gallery__link' href='${original}'>
              <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}">
            </a>
          </div>`;
}

function renderGalleryItems(galleryItems) {
  const galleryHtml = [];
  galleryItems.forEach((item) => {
    galleryHtml.push(createGalleryItem(item));
  });
  return galleryHtml.join("");
}

function handleImageClick(e) {
  if (e.target.nodeName !== "IMG") {
    return;
  }

  e.preventDefault();
  showLargeImage(e.target.dataset.source);
}

function showLargeImage(linkImg) {
  const instance = basicLightbox.create(`<img src='${linkImg}'>`);
  instance.show();
}

galleryEl.innerHTML = renderGalleryItems(galleryItems);
galleryEl.addEventListener("click", handleImageClick);
