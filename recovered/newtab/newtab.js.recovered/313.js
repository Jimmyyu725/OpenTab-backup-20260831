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
    topUseful: a,
    mainRatio: s
  } = t;
  let c = 0;
  if (a) {
    c += 36;
  }
  if (o) {
    c += 36;
  }
  const u = n - c;
  const l = r - r * 0.2;
  let f = r;
  let h = f * 9 / 16;
  if (h > u) {
    h = u;
    f = h * 16 / 9;
  }
  const p = f * (0.575 - Math.max(Math.min(720, f - 1200), 0) * 0.1818 / 720);
  const d = {
    width: p * e,
    height: h * (0.0963 - Math.max(Math.min(405, h - 675), 0) * 0.0296 / 405) * e
  };
  if (d.width > l) {
    d.height = l / d.width * d.height;
    d.width = l;
  }
  const m = {
    width: d.width * s,
    height: d.height * s
  };
  let g = null;
  g = i ? -0.3 : -0.06;
  const y = d.width / p * s;
  const b = Math.floor(g * u * y) + "px";
  const w = Math.floor(m.height * 0.775) + "px";
  return {
    width: Math.floor(m.width) + "px",
    height: Math.floor(m.height) + "px",
    searchRatio: Number((m.width / 625).toFixed(2)),
    marginTop: b,
    marginBottom: w,
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
    iconScale: a,
    innerWidth: s,
    mainRatio: c,
    fontSize: u
  } = t;
  let l = s;
  if (l < 1200) {
    l = 1200;
  } else if (l > 1920) {
    l = 1920;
  }
  const {
    appContentHeight: f,
    appContentWidth: h,
    searcherSizeWithRatio: p
  } = e;
  const d = h;
  const m = f * 0.8 - p.height * 2.451;
  const g = 1 + (1920 - l) * 0.5 / 720;
  const y = d / r;
  const b = m / n;
  const w = Math.min(Math.min(y, b) * a * g, y, b);
  const v = (m - n * w) / n * i / 2;
  const _ = r * (w + (d - r * w) / r * o / 2 * 2);
  let E = Math.min(Math.ceil(_ * c), s);
  let x = n * (w + v * 2) * c;
  const T = w * c;
  const I = Math.max(u * c, 12) * 1.3 + T * 0.9 * 0.08;
  const O = (25 + I) * 1.2;
  if (E < r * O) {
    E = r * O;
  }
  if (x < n * O) {
    x = n * O;
  }
  let S = T * 0.9 - I - 1;
  if (S < 25) {
    S = 25;
  }
  const A = s * 0.1 * c;
  return {
    width: Math.floor(S) + "px",
    miniIconPadding: Math.floor(S / 7 + 4) + "px",
    boxWidth: Math.ceil(E) + "px",
    boxHeight: Math.floor(x) + "px",
    iconOneHeight: Math.floor(x / n) + "px",
    iconRatio: Number((S / 106).toFixed(2)),
    iconsMargin: Math.floor(A) + "px"
  };
};