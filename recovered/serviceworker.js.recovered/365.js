var r = require("./41.js").match(/AppleWebKit\/(\d+)\./);
module.exports = !!r && +r[1];