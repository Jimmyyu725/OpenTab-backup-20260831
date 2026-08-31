module.exports = function () {
  var e = document.getSelection();
  if (!e.rangeCount) {
    return function () {};
  }
  var t = document.activeElement;
  var n = [];
  for (var r = 0; r < e.rangeCount; r++) {
    n.push(e.getRangeAt(r));
  }
  switch (t.tagName.toUpperCase()) {
    case "INPUT":
    case "TEXTAREA":
      t.blur();
      break;
    default:
      t = null;
  }
  e.removeAllRanges();
  return function () {
    if (e.type === "Caret") {
      e.removeAllRanges();
    }
    if (!e.rangeCount) {
      n.forEach(function (t) {
        e.addRange(t);
      });
    }
    if (t) {
      t.focus();
    }
  };
};