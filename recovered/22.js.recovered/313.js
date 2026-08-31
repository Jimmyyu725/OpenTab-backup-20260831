export const a = t => {
  const e = i(t);
  const n = o(t, e);
  return {
    searchWidth: e.width,
    searchHeight: e.height,
    searchMarginTop: e.marginTop,
    searchMarginBottom: e.marginBottom,
    searchRatio: e.searchRatio,
    iconBoxWidth: n.boxWidth,
    iconBoxHeight: n.boxHeight,
    iconOneHeight: n.iconOneHeight,
    iconWidth: n.width,
    miniIconPadding: n.miniIconPadding,
    iconRatio: n.iconRatio,
    iconsMargin: n.iconsMargin
  };
};
const i = t => {
  const {
    searchScale: e,
    innerHeight: n,
    innerWidth: r,
    miniMode: i,
    topBookmark: o,
    topUseful: s,
    mainRatio: a
  } = t;
  let c = 0;
  if (s) {
    c += 36;
  }
  if (o) {
    c += 36;
  }
  const u = n - c;
  const l = r - r * 0.2;
  let h = r;
  let p = h * 9 / 16;
  if (p > u) {
    p = u;
    h = p * 16 / 9;
  }
  const f = h * (0.575 - Math.max(Math.min(720, h - 1200), 0) * 0.1818 / 720);
  const d = {
    width: f * e,
    height: p * (0.0963 - Math.max(Math.min(405, p - 675), 0) * 0.0296 / 405) * e
  };
  if (d.width > l) {
    d.height = l / d.width * d.height;
    d.width = l;
  }
  const g = {
    width: d.width * a,
    height: d.height * a
  };
  let m = null;
  m = i ? -0.3 : -0.06;
  const y = d.width / f * a;
  const b = Math.floor(m * u * y) + "px";
  const v = Math.floor(g.height * 0.775) + "px";
  return {
    width: Math.floor(g.width) + "px",
    height: Math.floor(g.height) + "px",
    searchRatio: Number((g.width / 625).toFixed(2)),
    marginTop: b,
    marginBottom: v,
    appContentWidth: l,
    appContentHeight: u,
    searcherSizeWithRatio: d
  };
};
const o = (t, e) => {
  const {
    row: n,
    col: r,
    rowGap: i,
    colGap: o,
    iconScale: s,
    innerWidth: a,
    mainRatio: c,
    fontSize: u
  } = t;
  let l = a;
  if (l < 1200) {
    l = 1200;
  } else if (l > 1920) {
    l = 1920;
  }
  const {
    appContentHeight: h,
    appContentWidth: p,
    searcherSizeWithRatio: f
  } = e;
  const d = p;
  const g = h * 0.8 - f.height * 2.451;
  const m = 1 + (1920 - l) * 0.5 / 720;
  const y = d / r;
  const b = g / n;
  const v = Math.min(Math.min(y, b) * s * m, y, b);
  const w = (g - n * v) / n * i / 2;
  const x = r * (v + (d - r * v) / r * o / 2 * 2);
  let _ = Math.min(Math.ceil(x * c), a);
  let T = n * (v + w * 2) * c;
  const E = v * c;
  const O = Math.max(u * c, 12) * 1.3 + E * 0.9 * 0.08;
  const S = (25 + O) * 1.2;
  if (_ < r * S) {
    _ = r * S;
  }
  if (T < n * S) {
    T = n * S;
  }
  let I = E * 0.9 - O - 1;
  if (I < 25) {
    I = 25;
  }
  const A = a * 0.1 * c;
  return {
    width: Math.floor(I) + "px",
    miniIconPadding: Math.floor(I / 7 + 4) + "px",
    boxWidth: Math.ceil(_) + "px",
    boxHeight: Math.floor(T) + "px",
    iconOneHeight: Math.floor(T / n) + "px",
    iconRatio: Number((I / 106).toFixed(2)),
    iconsMargin: Math.floor(A) + "px"
  };
};