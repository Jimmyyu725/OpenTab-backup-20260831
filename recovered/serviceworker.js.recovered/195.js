var n = {}.toString;
module.exports = Array.isArray || function (t) {
  return n.call(t) == "[object Array]";
};