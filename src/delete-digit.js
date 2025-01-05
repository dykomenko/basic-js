const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = n.toString();
  let max = 0;

  for (let index = 0; index < arr.length; index++) {
    let temp = arr.slice(0, index) + arr.slice(index + 1);
    max = Math.max(max, Number(temp));
  }

  return max;
}

module.exports = {
  deleteDigit
};
