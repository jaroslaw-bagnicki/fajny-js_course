import { GitHubRepo } from './model';

function converter(repoInfo) {
  const { name, stargazers_count: stars, license } = repoInfo;
  return new GitHubRepo({
    name,
    stars,
    license: license ? license.spdx_id : ''
  });
}

export default converter;
