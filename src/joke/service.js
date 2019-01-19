/* global fetch */
const JOKE_API_URL = 'https://official-joke-api.appspot.com/random_joke';
const ICNDB_JOKE_API_URL = 'http://api.icndb.com/jokes/random';

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

function getDkatzJoke() {
  return genericFetch(JOKE_API_URL);
}

function getChuckJoke() {
  return genericFetch(ICNDB_JOKE_API_URL);
}

export { getDkatzJoke, getChuckJoke };
