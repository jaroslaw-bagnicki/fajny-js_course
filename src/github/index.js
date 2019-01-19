import fetchRepos from './service';

async function getRepos() {
  const arr = await fetchRepos();
  arr.forEach(repo => console.log(repo.toString()));
}

export default getRepos;
