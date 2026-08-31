var r = require("./43.js");
var o = require("./112.js");
(module.exports = function (t, e) {
  return o[t] ||= e !== undefined ? e : {};
})("versions", []).push({
  version: "3.15.2",
  mode: r ? "pure" : "global",
  copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
});