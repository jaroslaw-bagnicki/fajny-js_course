import { Joke } from './model';

/* global fetch */
const JOKE_API_URL = 'https://official-joke-api.appspot.com/random_joke';
const ICNDB_JOKE_API_URL = 'http://api.icndb.com/jokes/random?exclude=[nerdy]';

async function genericFetch(url) {
  try {
    const res = await fetch(url);
    if (res.ok) {
      return (await res.json());
    }
    throw Error('Fetch failed');
  } catch (err) {
    console.warn(err);
    return null;
  }
}

async function getDkatzJoke() {
  const { setup, punchline, type } = await genericFetch(JOKE_API_URL);
  return new Joke({ setup, punchline, type });
}

async function getChuckJoke() {
  const { value: { joke: punchline } } = await genericFetch(ICNDB_JOKE_API_URL);
  return new Joke({ punchline });
}

export { getDkatzJoke, getChuckJoke };
