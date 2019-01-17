// import game from './game';
import ghConverter from './github/converter';

// game();

const ghRepoMock = {
  name: 'brains',
  stargazers_count: 32,
  license: { spdx_id: 'MIT' }
};

console.log(ghConverter(ghRepoMock));
