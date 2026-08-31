const n = Object.freeze({
  loose: true
});
const r = Object.freeze({});
module.exports = t => t ? typeof t != "object" ? n : t : r;