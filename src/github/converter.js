function converter(repoInfo) {
  const { name, stargazers_count: stars, license: { spdx_id: license = null } } = repoInfo;
  return {
    name,
    stars,
    license
  };
}

export default converter;
