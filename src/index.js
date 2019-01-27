import './styles/main.scss';
import startGame from './game';
import showJoke from './joke';
import './about-me';

console.log('Main module loaded');

// UI vars
const UIGameBtn = document.querySelector('.button.game');
const UIJokeBtn = document.querySelector('.button.joke');

// Add event listerner
UIGameBtn.addEventListener('click', (e) => {
  e.preventDefault();
  startGame();
});

UIJokeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  showJoke();
});
