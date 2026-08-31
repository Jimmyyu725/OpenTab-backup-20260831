exports.__esModule = true;
exports.default = function (e) {
  return function (t) {
    return {
      install: function (n) {
        n.vMdParser.use(e, t);
      }
    };
  };
};