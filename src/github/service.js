import { fetchData } from './fetchData';
import { GitHubRepo } from './model';

const REPOS_URL = 'https://api.github.com/users/jaroslaw-bagnicki/repos/';
const POSTS_URL = 'https://raw.githubusercontent.com/jaroslaw-bagnicki/fajny-js_course/master/sample_data/';
const ABOUT_ME_URL = 'https://raw.githubusercontent.com/jaroslaw-bagnicki/fajny-js_course/master/sample_data/about-me.md';

const FORBIDEN_REPOS = ['kurs-gita', 'Mosh-11', 'webpack_demo', 'parcel_demo'];

function converter(repoInfo) {
  const { name, stargazers_count: stars, license } = repoInfo;
  return new GitHubRepo({
    name,
    stars,
    license: license ? license.spdx_id : ''
  });
}

async function getRepos() {
  const repos = await fetchData(REPOS_URL, 'json');
  return repos
    .filter(repo => !FORBIDEN_REPOS.includes(repo.name))
    .map(converter);
}

function getPost(fileName) {
  return fetchData(`${POSTS_URL}${fileName}`, 'text');
}

function getAboutMe() {
  return fetchData(ABOUT_ME_URL, 'text');
}

export {
  getRepos,
  getPost,
  getAboutMe
};
