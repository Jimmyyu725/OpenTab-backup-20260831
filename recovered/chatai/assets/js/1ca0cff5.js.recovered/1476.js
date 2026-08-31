var _o = require(/*webcrack:missing*/"./9445.js");
export function o() {
  const e = (0, _o.iH)(0);
  const t = (0, _o.iH)(0);
  const r = (0, _o.iH)(0);
  const n = (0, _o.iH)(0);
  const i = (0, _o.iH)(0);
  const s = (0, _o.iH)(0);
  const a = (0, _o.iH)("");
  const l = () => {
    r.value = 0;
    n.value = 0;
    i.value = 0;
    s.value = 0;
    a.value = "";
  };
  return {
    move: o => {
      const l = o.touches[0];
      r.value = (l.clientX < 0 ? 0 : l.clientX) - e.value;
      n.value = l.clientY - t.value;
      i.value = Math.abs(r.value);
      s.value = Math.abs(n.value);
      var d;
      var c;
      if (!a.value || i.value < 10 && s.value < 10) {
        d = i.value;
        c = s.value;
        a.value = d > c ? "horizontal" : c > d ? "vertical" : "";
      }
    },
    start: r => {
      l();
      e.value = r.touches[0].clientX;
      t.value = r.touches[0].clientY;
    },
    reset: l,
    startX: e,
    startY: t,
    deltaX: r,
    deltaY: n,
    offsetX: i,
    offsetY: s,
    direction: a,
    isVertical: () => a.value === "vertical",
    isHorizontal: () => a.value === "horizontal"
  };
}