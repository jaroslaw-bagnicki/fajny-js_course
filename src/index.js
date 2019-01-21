// import game from './game';
// import main from './github';
// import showJoke from './joke';
import 'markdown-element';
import { getPost, getRepos } from './github';

// showJoke();

async function logRepos() {
  const arr = await getRepos();
  arr.forEach(repo => console.log(repo.toString()));
}
// logRepos();

async function renderPost(fileName) {
  const markdown = await getPost(fileName);
  const post = document.createElement('mark-down');
  post.textContent = markdown;
  return post;
}

renderPost('1.md').then(post => document.body.appendChild(post));
