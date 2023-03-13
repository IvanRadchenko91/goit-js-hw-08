// Импорт массива 'galleryItems' из файла с именем 'gallery-items'
import { galleryItems } from './gallery-items';

// Импортирование библиотеки SimpleLightbox и ее CSS-файла
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Выбор элемента с классом 'gallery'
const galleryEl = document.querySelector('.gallery');
// Вызов функции 'renderGalleryItems' и установка innerHTML элемента 'gallery' в возвращаемое значение
galleryEl.innerHTML = renderGalleryItems(galleryItems);

// Функция которая принимает в качестве аргумента массив изображений
function renderGalleryItems(images) {
  return (
    images
      // Использование функции 'map' для перебора каждого изображения и создания тега якоря с соответствующим превью, оригиналом и описанием.
      .map(
        ({ preview, original, description }) =>
          `<a class='gallery__item' href='${original}'>
            <img class="gallery__image" src="${preview}" alt="${description}">
          </a>`
      )
      // Объединение полученного массива тегов якорей в одну строку
      .join('')
  );
}
// Создание нового экземпляра SimpleLightbox с тегами якоря элемента 'gallery' в качестве его элементов, и установка некоторых дополнительных опций
let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt', // Установка подписей для использования атрибута 'alt' изображений
  captionDelay: 250, // Установка задержки для появления титров
});
