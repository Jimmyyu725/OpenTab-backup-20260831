var r = {}.toString;
module.exports = function (t) {
  return r.call(t).slice(8, -1);
};