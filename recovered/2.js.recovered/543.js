var n = require("./415.js");
module.exports = function (t, e) {
  var r = e ? n(t.buffer) : t.buffer;
  return new t.constructor(r, t.byteOffset, t.byteLength);
};