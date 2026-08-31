var e = require("./94.js");
const n = typeof e == "object" && e.env && e.env.NODE_DEBUG && /\bsemver\b/i.test(e.env.NODE_DEBUG) ? (...t) => console.error("SEMVER", ...t) : () => {};
module.exports = n;