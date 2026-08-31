var i = require("./8108.js");
var s = require("./2469.js");
var r = Function.prototype;
var a = i && Object.getOwnPropertyDescriptor;
var o = s(r, "name");
var u = o && function () {}.name === "something";
var g = o && (!i || i && a(r, "name").configurable);
module.exports = {
  EXISTS: o,
  PROPER: u,
  CONFIGURABLE: g
};