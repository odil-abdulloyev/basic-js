const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  return matrix.reduce((res, arr) => {
    return res += arr.filter(x => x === '^^').length;
  }, 0);
};
