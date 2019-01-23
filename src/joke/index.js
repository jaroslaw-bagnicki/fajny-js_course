import { getDkatzJoke, getChuckJoke } from './service';

const ALLOWED_JOKE_TYPES = ['programming'];

async function showJoke() {
  let joke;
  joke = await getDkatzJoke();
  if (!ALLOWED_JOKE_TYPES.includes(joke.type)) {
    joke = await getChuckJoke();
  }
  alert(joke);
}

export default showJoke;
