import { getDkatzJoke, getChuckJoke } from './service';

/* global alert */
const ALLOWED_JOKE_TYPES = ['programming'];

async function showJoke() {
  let joke;
  joke = await getDkatzJoke();
  if (!ALLOWED_JOKE_TYPES.includes(joke.type)) {
    joke = await getChuckJoke();
  }
  console.log(joke);
  alert(joke);
}

export default showJoke;
