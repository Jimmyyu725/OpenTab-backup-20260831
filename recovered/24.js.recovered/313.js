export const a = t => {
  const e = o(t);
  const n = i(t, e);
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
const o = t => {
  const {
    searchScale: e,
    innerHeight: n,
    innerWidth: r,
    miniMode: o,
    topBookmark: i,
    topUseful: s,
    mainRatio: a
  } = t;
  let c = 0;
  if (s) {
    c += 36;
  }
  if (i) {
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
  let y = null;
  y = o ? -0.3 : -0.06;
  const m = d.width / f * a;
  const b = Math.floor(y * u * m) + "px";
  const w = Math.floor(g.height * 0.775) + "px";
  return {
    width: Math.floor(g.width) + "px",
    height: Math.floor(g.height) + "px",
    searchRatio: Number((g.width / 625).toFixed(2)),
    marginTop: b,
    marginBottom: w,
    appContentWidth: l,
    appContentHeight: u,
    searcherSizeWithRatio: d
  };
};
const i = (t, e) => {
  const {
    row: n,
    col: r,
    rowGap: o,
    colGap: i,
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
  const y = 1 + (1920 - l) * 0.5 / 720;
  const m = d / r;
  const b = g / n;
  const w = Math.min(Math.min(m, b) * s * y, m, b);
  const v = (g - n * w) / n * o / 2;
  const _ = r * (w + (d - r * w) / r * i / 2 * 2);
  let T = Math.min(Math.ceil(_ * c), a);
  let E = n * (w + v * 2) * c;
  const x = w * c;
  const S = Math.max(u * c, 12) * 1.3 + x * 0.9 * 0.08;
  const O = (25 + S) * 1.2;
  if (T < r * O) {
    T = r * O;
  }
  if (E < n * O) {
    E = n * O;
  }
  let I = x * 0.9 - S - 1;
  if (I < 25) {
    I = 25;
  }
  const A = a * 0.1 * c;
  return {
    width: Math.floor(I) + "px",
    miniIconPadding: Math.floor(I / 7 + 4) + "px",
    boxWidth: Math.ceil(T) + "px",
    boxHeight: Math.floor(E) + "px",
    iconOneHeight: Math.floor(E / n) + "px",
    iconRatio: Number((I / 106).toFixed(2)),
    iconsMargin: Math.floor(A) + "px"
  };
};