function converter(repoInfo) {
  const { name, stargazers_count: stars, license: licenseFull } = repoInfo;
  const { spdx_id: license = null } = licenseFull;
  return {
    name,
    stars,
    license
  };
}

export default converter;
