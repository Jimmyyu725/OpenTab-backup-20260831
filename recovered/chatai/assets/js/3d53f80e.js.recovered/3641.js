var r = require("./3766.js");
exports.__esModule = true;
exports.default = function (e) {
  return function (t, n) {
    t.extendMarkdown(function (t) {
      if (e) {
        t.use(a.default, (0, i.default)({}, n, {
          katex: e
        }));
      }
    });
  };
};
var i = r(require("./8893.js"));
var a = r(require("./9969.js"));