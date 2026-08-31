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
  const d = h * (0.575 - Math.max(Math.min(720, h - 1200), 0) * 0.1818 / 720);
  const f = {
    width: d * e,
    height: p * (0.0963 - Math.max(Math.min(405, p - 675), 0) * 0.0296 / 405) * e
  };
  if (f.width > l) {
    f.height = l / f.width * f.height;
    f.width = l;
  }
  const g = {
    width: f.width * a,
    height: f.height * a
  };
  let y = null;
  y = i ? -0.3 : -0.06;
  const m = f.width / d * a;
  const b = Math.floor(y * u * m) + "px";
  const v = Math.floor(g.height * 0.775) + "px";
  return {
    width: Math.floor(g.width) + "px",
    height: Math.floor(g.height) + "px",
    searchRatio: Number((g.width / 625).toFixed(2)),
    marginTop: b,
    marginBottom: v,
    appContentWidth: l,
    appContentHeight: u,
    searcherSizeWithRatio: f
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
    searcherSizeWithRatio: d
  } = e;
  const f = p;
  const g = h * 0.8 - d.height * 2.451;
  const y = 1 + (1920 - l) * 0.5 / 720;
  const m = f / r;
  const b = g / n;
  const v = Math.min(Math.min(m, b) * s * y, m, b);
  const w = (g - n * v) / n * i / 2;
  const x = r * (v + (f - r * v) / r * o / 2 * 2);
  let _ = Math.min(Math.ceil(x * c), a);
  let O = n * (v + w * 2) * c;
  const T = v * c;
  const S = Math.max(u * c, 12) * 1.3 + T * 0.9 * 0.08;
  const E = (25 + S) * 1.2;
  if (_ < r * E) {
    _ = r * E;
  }
  if (O < n * E) {
    O = n * E;
  }
  let j = T * 0.9 - S - 1;
  if (j < 25) {
    j = 25;
  }
  const k = a * 0.1 * c;
  return {
    width: Math.floor(j) + "px",
    miniIconPadding: Math.floor(j / 7 + 4) + "px",
    boxWidth: Math.ceil(_) + "px",
    boxHeight: Math.floor(O) + "px",
    iconOneHeight: Math.floor(O / n) + "px",
    iconRatio: Number((j / 106).toFixed(2)),
    iconsMargin: Math.floor(k) + "px"
  };
};