import scss from './styles/main.scss';
import startGame from './game';
import showJoke from './joke';
import './blog';
import './about-me';

// UI vars
const UIGameBtn = document.querySelector('.button.game');
const UIJokeBtn = document.querySelector('.button.joke');
const UIBlogBtn = document.querySelector('.button.blog');

// Add event listerner
UIGameBtn.addEventListener('click', (e) => {
  e.preventDefault();
  startGame();
});

UIJokeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  showJoke();
});
