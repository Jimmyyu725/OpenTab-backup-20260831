var r = require("./41.js").match(/firefox\/(\d+)/i);
module.exports = !!r && +r[1];