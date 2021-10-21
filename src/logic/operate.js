import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  const one = Big(numberOne);
  const two = Big(numberTwo);
  if (operation === '+') {
    return one.plus(two).toString();
  }
  if (operation === '-') {
    return one.minus(two).toString();
  }
  if (operation === 'x') {
    return one.times(two).toString();
  }
  if (operation === '÷') {
    try {
      return one.div(two).toString();
    } catch (err) {
      return 'error: you can not divide by 0.';
    }
  }
  if (operation === '%') {
    try {
      return one.mod(two).toString();
    } catch (err) {
      return 'error: Invalid use of % operator.';
    }
  }
  throw Error(`Unknown operation '${operation}'`);
}
