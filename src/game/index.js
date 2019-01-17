import TO_FIND from './random';
import getNum from './input';
import success from './success';
import info from './userInfo';
import attemptsCounter from './atemptsCounter';

export default () => {
  attemptsCounter.increase();
  let num = getNum();
  while (num !== TO_FIND) {
    info(num, TO_FIND);
    attemptsCounter.increase();
    num = getNum();
  }
  success();
};
