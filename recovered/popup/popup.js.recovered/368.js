var r = require("./28.js").match(/AppleWebKit\/(\d+)\./);
module.exports = !!r && +r[1];