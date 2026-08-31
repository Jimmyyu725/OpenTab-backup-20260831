var r = require(/*webcrack:missing*/"./28.js").match(/firefox\/(\d+)/i);
module.exports = !!r && +r[1];