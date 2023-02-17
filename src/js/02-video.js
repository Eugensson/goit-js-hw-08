import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

const currentTime = localStorage.getItem(STORAGE_KEY);
if (currentTime) player.setCurrentTime(currentTime);

const saveCurrentTime = function (time) {
  localStorage.setItem(STORAGE_KEY, Math.round(time.seconds));
};

player.on('timeupdate', throttle(saveCurrentTime, 1000));
