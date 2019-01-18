import fetchRepos from './service';

function getRepos() {
  fetchRepos().then(arr => console.log(arr));
}

export default getRepos;
