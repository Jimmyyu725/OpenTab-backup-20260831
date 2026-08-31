var r = require("./415.js");
module.exports = function (t, e) {
  var n = e ? r(t.buffer) : t.buffer;
  return new t.constructor(n, t.byteOffset, t.length);
};