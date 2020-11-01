const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (!options.repeatTimes && !options.additionRepeatTimes) {
    return 'TESTstrADD!';
  }

  options = {
    repeatTimes: options.repeatTimes || 0,
    separator: options.separator || '+',
    addition: options.addition + '' || '',
    additionRepeatTimes: options.additionRepeatTimes || 0,
    additionSeparator: options.additionSeparator || "|",
  }
  let result = '';

  for (let i = 0; i < options.repeatTimes; ++i) {
    result += str;
    for (let j = 0; j < options.additionRepeatTimes; j++) {
      result += options.addition + (j + 1 < options.additionRepeatTimes ? options.additionSeparator : '');
    }
    result += (i + 1 < options.repeatTimes) ? options.separator : '';
  }

  return result;
}