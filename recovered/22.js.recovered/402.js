function n(t) {
  return !!t.constructor && typeof t.constructor.isBuffer == "function" && t.constructor.isBuffer(t);
}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
module.exports = function (t) {
  return t != null && (n(t) || function (t) {
    return typeof t.readFloatLE == "function" && typeof t.slice == "function" && n(t.slice(0, 0));
  }(t) || !!t._isBuffer);
};