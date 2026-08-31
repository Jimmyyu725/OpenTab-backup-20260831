var r = {
  [require("./17.js")("toStringTag")]: "z"
};
module.exports = String(r) === "[object z]";