import { GitHubRepo } from './model';

function converter(repoInfo) {
  const { name, stargazers_count: stars, license: { spdx_id: license = null } } = repoInfo;
  return new GitHubRepo({
    name,
    stars,
    license
  });
}

export default converter;
