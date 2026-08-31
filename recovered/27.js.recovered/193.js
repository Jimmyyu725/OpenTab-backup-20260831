var e = require("./65.js");
var o = require("./142.js");
(module.exports = function (t, n) {
  return o[t] ||= n !== undefined ? n : {};
})("versions", []).push({
  version: "3.15.2",
  mode: e ? "pure" : "global",
  copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
});