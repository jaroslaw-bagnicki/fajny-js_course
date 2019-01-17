let attempts = 0;

const attemptsCounter = {
  getAttempts: function getAttempts() {
    return attempts;
  },
  increase: function increase() {
    attempts += 1;
  }
};

export default attemptsCounter;
