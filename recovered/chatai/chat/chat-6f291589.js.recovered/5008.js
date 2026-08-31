var i = require("./1475.js");
var s = require("./7268.js");
var r = require("./3829.js");
const a = function (e = "default") {
  const t = (0, s.Rr)();
  return (0, s.Fl)(() => {
    var n;
    const i = t == null || (n = t[e]) === null || n === undefined ? undefined : n.call(t);
    if (i) {
      if ((0, r.Z)(i[0].children)) {
        return i[0].children;
      } else {
        return i.filter(e => typeof e.type != "symbol");
      }
    } else {
      return [];
    }
  });
};
export const f = e => {
  e.config.globalProperties.isFn = i.LQ;
  e.config.globalProperties.i18n = i18n;
  e.config.globalProperties.getSlots = a;
  e.config.globalProperties.getQiniuImage = i.Em;
};