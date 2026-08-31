const r = require("./211.js");
module.exports = (t, e) => new r(t, e).set.map(t => t.map(t => t.value).join(" ").trim().split(" "));