var t = Math.ceil;
var n = Math.floor;
module.exports = function (e) {
  var i = +e;
  if (i != i || i === 0) {
    return 0;
  } else {
    return (i > 0 ? n : t)(i);
  }
};