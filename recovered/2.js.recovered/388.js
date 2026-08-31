var n = require("./510.js");
module.exports = function (t, e) {
  var r = t.__data__;
  if (n(e)) {
    return r[typeof e == "string" ? "string" : "hash"];
  } else {
    return r.map;
  }
};