// Импорт библиотек Vimeo Player и Lodash throttle
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// Константа для ключа, используемого для хранения текущего времени в локальном хранилище
const TIME_KEY_STORAGE = 'videoplayer-current-time';

// Выбираем элемент iframe, содержащий проигрыватель Vimeo
const iframeEl = document.querySelector('#vimeo-player');
// Создаем новый экземпляр проигрывателя Vimeo, используя выбранный элемент iframe
const player = new Player(iframeEl);

// Функция для сохранения текущего времени видео в локальном хранилище
const onVideoRememberTime = ({ seconds }) => {
  localStorage.setItem(TIME_KEY_STORAGE, seconds);
};

// Функция для воспроизведения видео и установки текущего времени на ранее сохраненное время
const playVideo = () => {
  const saveTime = localStorage.getItem(TIME_KEY_STORAGE);
  saveTime && player.setCurrentTime(saveTime);
};

// Добавляем слушателя для события 'timeupdate' для сохранения текущего времени каждую секунду с помощью lodash throttle
player.on('timeupdate', throttle(onVideoRememberTime, 1000));

// Воспроизвести видео и установить текущее время на ранее сохраненное время
playVideo();
