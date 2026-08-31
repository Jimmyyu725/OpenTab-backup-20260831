var e = Math.ceil;
var r = Math.floor;
module.exports = function (t) {
  if (isNaN(t = +t)) {
    return 0;
  } else {
    return (t > 0 ? r : e)(t);
  }
};