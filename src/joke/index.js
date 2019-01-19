import { getDkatzJoke, getChuckJoke } from './service';

/* global alert */
const ALLOWED_JOKE_TYPES = ['programming'];

async function showJoke() {
  let joke;
  joke = await getDkatzJoke();
  if (ALLOWED_JOKE_TYPES.includes(joke.type)) {
    alert(joke.setup);
    alert(joke.punchline);
  } else {
    joke = await getChuckJoke();
    alert(joke.value.joke);
  }
}

export default showJoke;
