var e = {
  [require("./17.js")("toStringTag")]: "z"
};
module.exports = String(e) === "[object z]";