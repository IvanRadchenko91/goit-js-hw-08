import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const TIME_KEY_STORAGE = 'videoplayer-current-time';

const iframeEl = document.querySelector('#vimeo-player');
const player = new Player(iframeEl);

const onVideoRememberTime = ({ seconds }) => {
  localStorage.setItem(TIME_KEY_STORAGE, seconds);
};

const playVideo = () => {
  const saveTime = localStorage.getItem(TIME_KEY_STORAGE);
  saveTime && player.setCurrentTime(saveTime);
};

player.on('timeupdate', throttle(onVideoRememberTime, 1000));
playVideo();
