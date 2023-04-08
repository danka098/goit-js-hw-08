import Player from '@vimeo/player';
let throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';
let currentTime = 0;

player.on(
  'timeupdate',
  throttle(data => {
    localStorage.setItem(LOCALSTORAGE_KEY, data.seconds);
  }, 1000)
);

if (localStorage.getItem(LOCALSTORAGE_KEY) !== null) {
  currentTime = localStorage.getItem(LOCALSTORAGE_KEY);
}
player.setCurrentTime(currentTime);
