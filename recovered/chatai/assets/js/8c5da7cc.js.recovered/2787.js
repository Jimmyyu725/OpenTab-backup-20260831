var n = require(/*webcrack:missing*/"./6080.js");
var o = require("./1962.js");
var a = require(/*webcrack:missing*/"./365.js");
var i = {};
i["[object Float32Array]"] = i["[object Float64Array]"] = i["[object Int8Array]"] = i["[object Int16Array]"] = i["[object Int32Array]"] = i["[object Uint8Array]"] = i["[object Uint8ClampedArray]"] = i["[object Uint16Array]"] = i["[object Uint32Array]"] = true;
i["[object Arguments]"] = i["[object Array]"] = i["[object ArrayBuffer]"] = i["[object Boolean]"] = i["[object DataView]"] = i["[object Date]"] = i["[object Error]"] = i["[object Function]"] = i["[object Map]"] = i["[object Number]"] = i["[object Object]"] = i["[object RegExp]"] = i["[object Set]"] = i["[object String]"] = i["[object WeakMap]"] = false;
const c = function (e) {
  return (0, a.Z)(e) && (0, o.Z)(e.length) && !!i[(0, n.Z)(e)];
};
var s = require("./4054.js");
var l = require("./876.js");
var u = l.Z && l.Z.isTypedArray;
export const Z = u ? (0, s.Z)(u) : c;