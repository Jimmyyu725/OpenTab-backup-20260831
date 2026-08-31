var r = require("./56.js");
var o = require("./42.js");
(module.exports = function (t, e) {
  return o[t] ||= e !== undefined ? e : {};
})("versions", []).push({
  version: "3.15.2",
  mode: r ? "pure" : "global",
  copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
});