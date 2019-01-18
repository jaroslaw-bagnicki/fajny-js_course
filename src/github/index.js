import fetchRepos from './service';

function getRepos() {
  fetchRepos().then(arr => arr.forEach(repo => console.log(repo.toString())));
}

export default getRepos;
