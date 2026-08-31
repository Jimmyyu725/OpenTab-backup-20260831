var n = require("./386.js");
module.exports = function (t, e) {
  var r = this.__data__;
  var o = n(r, t);
  if (o < 0) {
    ++this.size;
    r.push([t, e]);
  } else {
    r[o][1] = e;
  }
  return this;
};