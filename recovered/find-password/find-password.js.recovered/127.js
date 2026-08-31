var r = {
  [require("./8.js")("toStringTag")]: "z"
};
module.exports = String(r) === "[object z]";