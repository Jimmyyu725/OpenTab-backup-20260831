var r = {
  [require("./9.js")("toStringTag")]: "z"
};
module.exports = String(r) === "[object z]";