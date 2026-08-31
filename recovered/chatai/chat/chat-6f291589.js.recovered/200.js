var i = require("./2334.js");
var s = require("./4351.js");
function r(e) {
  if (s(e)) {
    return e;
  } else {
    return undefined;
  }
}
module.exports = function (e, t) {
  if (arguments.length < 2) {
    return r(i[e]);
  } else {
    return i[e] && i[e][t];
  }
};