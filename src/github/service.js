import { GitHubRepo } from './model';

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

async function fetchRepos() {
  try {
    const res = await fetch(URL);
    if (res.ok) {
      const arr = (await res.json())
        .filter(repo => !FORBIDEN_REPOS.includes(repo.name))
        .map(converter);
      return arr;
    }
    throw Error('Response not 200');
  } catch (err) {
    console.warn(err);
    return [];
  }
}

export default fetchRepos;
