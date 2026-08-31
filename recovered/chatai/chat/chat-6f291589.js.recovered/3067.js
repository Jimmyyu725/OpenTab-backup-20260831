var i = {
  [require("./2226.js")("toStringTag")]: "z"
};
module.exports = String(i) === "[object z]";