module.exports = function (t, n, e) {
  if (!(t instanceof n)) {
    throw TypeError("Incorrect " + (e ? e + " " : "") + "invocation");
  }
  return t;
};