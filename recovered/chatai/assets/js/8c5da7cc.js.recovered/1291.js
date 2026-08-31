export const Z = function (e) {
  var t = -1;
  var r = Array(e.size);
  e.forEach(function (e) {
    r[++t] = e;
  });
  return r;
};