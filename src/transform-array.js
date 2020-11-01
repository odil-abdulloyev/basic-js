const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  const out = arr.slice();

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        if (i + 1 < out.length) {
          out[i + 1] = null;
        }
        out[i] = null;
        break;
      case '--discard-prev':
        if (i > 0) {
          out[i - 1] = null;
        }
        out[i] = null;
        break;
      case '--double-next':
        if (i + 1 < out.length) {
          out[i] = out[i + 1];
        } else {
          out[i] = null;
        }
        break;
      case '--double-prev':
        if (i > 0) {
          out[i] = out[i - 1];
        } else {
          out[i] = null;
        }
    }
  }

  return out.filter(el => el !== null);
}