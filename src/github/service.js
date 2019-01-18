/* global fetch */
const URL = 'https://api.github.com/users/jaroslaw-bagnicki/repos';

function fetchRepos() {
  return fetch(URL)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw Error('Response not 200');
    })
    .catch(err => console.warn(err));
}

export default fetchRepos;
