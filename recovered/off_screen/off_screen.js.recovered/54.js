var r = require("./56.js");
var o = require("./42.js");
(module.exports = function (t, n) {
  return o[t] ||= n !== undefined ? n : {};
})("versions", []).push({
  version: "3.15.2",
  mode: r ? "pure" : "global",
  copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
});