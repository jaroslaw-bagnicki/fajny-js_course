/* global fetch */
const URL = 'https://api.github.com/users/jaroslaw-bagnicki/repos';
const FORBIDEN_REPOS = ['kurs-gita', 'Mosh-11', 'webpack_demo', 'parcel_demo'];

function fetchRepos() {
  return fetch(URL)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw Error('Response not 200');
    })
    .catch(err => console.warn(err))
    .then(arr => arr.filter(repo => !FORBIDEN_REPOS.includes(repo.name)));
}

export default fetchRepos;
