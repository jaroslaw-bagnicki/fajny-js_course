import { GitHubRepo } from './model';

/* global fetch */
const URL = 'https://api.github.com/users/jaroslaw-bagnicki/repos';
const FORBIDEN_REPOS = ['kurs-gita', 'Mosh-11', 'webpack_demo', 'parcel_demo'];

function converter(repoInfo) {
  const { name, stargazers_count: stars, license } = repoInfo;
  return new GitHubRepo({
    name,
    stars,
    license: license ? license.spdx_id : ''
  });
}

function fetchRepos() {
  return fetch(URL)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw Error('Response not 200');
    })
    .then(arr => arr
      .filter(repo => !FORBIDEN_REPOS.includes(repo.name))
      .map(converter))
    .catch(err => console.warn(err));
}

export default fetchRepos;
