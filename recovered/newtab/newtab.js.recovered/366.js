var r = require("./28.js").match(/firefox\/(\d+)/i);
module.exports = !!r && +r[1];