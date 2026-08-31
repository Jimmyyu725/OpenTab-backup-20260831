var i = require("./4351.js");
module.exports = function (e) {
  if (typeof e == "object") {
    return e !== null;
  } else {
    return i(e);
  }
};