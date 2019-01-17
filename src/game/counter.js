let count = 0;

const counter = {
  init() {
    count = 1;
  },
  increment() {
    count += 1;
  },
  get count() {
    return count;
  }
};

export default counter;
