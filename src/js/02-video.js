import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const CURRENT_TIME = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });

player.on('timeupdate', throttle(saveCurrentTime, 1000));

function saveCurrentTime(time) {
  localStorage.setItem(CURRENT_TIME, Math.round(time.seconds));
}

player.setCurrentTime(localStorage.getItem(CURRENT_TIME));
