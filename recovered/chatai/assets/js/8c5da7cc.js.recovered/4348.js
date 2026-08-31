var n = require("./5246.js");
var o = require("./9114.js");
const a = (0, require("./4932.js").Z)(Object.keys, Object);
var i = Object.prototype.hasOwnProperty;
const c = function (e) {
  if (!(0, o.Z)(e)) {
    return a(e);
  }
  var t = [];
  for (var r in Object(e)) {
    if (i.call(e, r) && r != "constructor") {
      t.push(r);
    }
  }
  return t;
};
var s = require("./385.js");
export const Z = function (e) {
  if ((0, s.Z)(e)) {
    return (0, n.Z)(e);
  } else {
    return c(e);
  }
};