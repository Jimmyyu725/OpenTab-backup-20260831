var t = require("./153.js").Buffer;
function n(t) {
  return Object.prototype.toString.call(t);
}
exports.isArray = function (t) {
  if (Array.isArray) {
    return Array.isArray(t);
  } else {
    return n(t) === "[object Array]";
  }
};
exports.isBoolean = function (t) {
  return typeof t == "boolean";
};
exports.isNull = function (t) {
  return t === null;
};
exports.isNullOrUndefined = function (t) {
  return t == null;
};
exports.isNumber = function (t) {
  return typeof t == "number";
};
exports.isString = function (t) {
  return typeof t == "string";
};
exports.isSymbol = function (t) {
  return typeof t == "symbol";
};
exports.isUndefined = function (t) {
  return t === undefined;
};
exports.isRegExp = function (t) {
  return n(t) === "[object RegExp]";
};
exports.isObject = function (t) {
  return typeof t == "object" && t !== null;
};
exports.isDate = function (t) {
  return n(t) === "[object Date]";
};
exports.isError = function (t) {
  return n(t) === "[object Error]" || t instanceof Error;
};
exports.isFunction = function (t) {
  return typeof t == "function";
};
exports.isPrimitive = function (t) {
  return t === null || typeof t == "boolean" || typeof t == "number" || typeof t == "string" || typeof t == "symbol" || t === undefined;
};
exports.isBuffer = t.isBuffer;