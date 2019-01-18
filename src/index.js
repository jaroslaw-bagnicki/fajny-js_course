/* global alert */

// import game from './game';
import ghConverter from './github/converter';

// game();

const ghRepoMock = {
  name: 'brains',
  stargazers_count: 32,
  license: { spdx_id: 'MIT' }
};

const ghRepoMock2 = {
  name: 'null-test',
  stargazers_count: 0,
  license: null
};

alert(ghConverter(ghRepoMock));
alert(ghConverter(ghRepoMock2));
