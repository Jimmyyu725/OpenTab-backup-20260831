var n = {
  "./widget-chatgpt/loader": [5369, 369]
};
function o(e) {
  if (!require.o(n, e)) {
    return Promise.resolve().then(() => {
      var t = new Error("Cannot find module '" + e + "'");
      t.code = "MODULE_NOT_FOUND";
      throw t;
    });
  }
  var t = n[e];
  var o = t[0];
  return require.e(t[1]).then(() => require(o));
}
o.keys = () => Object.keys(n);
o.id = 8531;
module.exports = o;