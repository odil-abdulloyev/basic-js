const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor() {
    this.depth = 1;
  }
  calculateDepth(arr) {
    // throw new CustomError('Not implemented');
    if (Array.isArray(arr)) {
      return Math.max(...arr.map(x => this.calculateDepth(x.length === 0 ? [1] : x))) + 1;
    }
    return 0;
  }
};
