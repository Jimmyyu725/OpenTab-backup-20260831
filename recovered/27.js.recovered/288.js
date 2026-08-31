module.exports = function (t, n, r) {
  if (!(t instanceof n)) {
    throw TypeError("Incorrect " + (r ? r + " " : "") + "invocation");
  }
  return t;
};