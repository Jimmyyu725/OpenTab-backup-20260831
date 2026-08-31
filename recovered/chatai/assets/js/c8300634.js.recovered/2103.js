var t = require(/*webcrack:missing*/"./3056.js");
var u = require(/*webcrack:missing*/"./6559.js");
export function Q(n) {
  return (0, t.FC)(this, arguments, function () {
    var r;
    var e;
    var u;
    return (0, t.Jh)(this, function (o) {
      switch (o.label) {
        case 0:
          r = n.getReader();
          o.label = 1;
        case 1:
          o.trys.push([1,, 9, 10]);
          o.label = 2;
        case 2:
          return [4, (0, t.qq)(r.read())];
        case 3:
          e = o.sent();
          u = e.value;
          if (e.done) {
            return [4, (0, t.qq)(undefined)];
          } else {
            return [3, 5];
          }
        case 4:
          return [2, o.sent()];
        case 5:
          return [4, (0, t.qq)(u)];
        case 6:
          return [4, o.sent()];
        case 7:
          o.sent();
          return [3, 2];
        case 8:
          return [3, 10];
        case 9:
          r.releaseLock();
          return [7];
        case 10:
          return [2];
      }
    });
  });
}
export function L(n) {
  return (0, u.m)(n == null ? undefined : n.getReader);
}