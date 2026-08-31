var r = Math.ceil;
var e = Math.floor;
module.exports = function (t) {
  if (isNaN(t = +t)) {
    return 0;
  } else {
    return (t > 0 ? e : r)(t);
  }
};