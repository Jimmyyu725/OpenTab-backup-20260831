module.exports = function (t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= 9007199254740991;
};