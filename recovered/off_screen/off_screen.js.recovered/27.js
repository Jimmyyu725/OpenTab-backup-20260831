module.exports = function (t) {
  if (typeof t != "function") {
    throw TypeError(String(t) + " is not a function");
  }
  return t;
};