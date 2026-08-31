var r = {
  [require("./11.js")("toStringTag")]: "z"
};
module.exports = String(r) === "[object z]";