const {
  AbortController: t,
  AbortSignal: r
} = typeof self != "undefined" ? self : typeof window != "undefined" ? window : undefined;
module.exports = t;
module.exports.AbortSignal = r;
module.exports.default = t;