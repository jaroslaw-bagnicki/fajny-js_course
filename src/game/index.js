import TO_FIND from './random';
import getNum from './input';
import success from './success';
import info from './userInfo';
import counter from './counter';

export default () => {
  counter.init();
  let num = getNum();
  while (num !== TO_FIND) {
    info(num, TO_FIND);
    counter.increment();
    num = getNum();
  }
  success(counter.count);
};
