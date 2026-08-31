module.exports = function (t) {
  if (typeof t == "object") {
    return t !== null;
  } else {
    return typeof t == "function";
  }
};