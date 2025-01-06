const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let out = '';
  if (str) {
    let temp = str[0];
    let count = 0;
    for (let index = 1; index <= str.length; index++) {
     if (str[index] === temp){
      count += 1;
     }
     else{
      out += count ? (count + 1) + temp : temp;
      temp = str[index];
      count = 0;
     }
    }
  }
  return out;
}

module.exports = {
  encodeLine
};
