var r = require("./162.js");
export const b = {
  notice: {
    gmail: false,
    gmailVoice: false,
    gmailNumber: false,
    todoNumber: true
  },
  link: {
    icon: !!require("./0.js").s,
    search: true,
    bookmark: false,
    history: false
  },
  view: {
    topBookmark: false,
    topUseful: false,
    windmill: true,
    pagin: false,
    hideInfinityAI: false,
    isShowHomepageBtn: true,
    isHideIcp: false,
    scaleSide: 1,
    scaleMain: 1
  },
  layout: {
    row: 3,
    col: 6,
    rowGap: 0.4,
    colGap: 0.3,
    custom: true,
    customItem: [3, 6]
  },
  animation: {
    easing: "linear"
  },
  icon: {
    miniMode: false,
    shadow: false,
    startAnimation: false,
    opacity: 1,
    radius: 0.5,
    scale: 0.6,
    isHideIconName: false
  },
  search: {
    hide: false,
    searchSuggest: true,
    keepSearchInput: false,
    hideCategory: false,
    hideButton: true,
    shadow: true,
    scale: 0.75,
    radius: r.j,
    opacity: 1
  },
  font: {
    shadow: true,
    size: 13,
    color: "rgb(221, 221, 221)"
  }
};
export const a = function (t, e) {
  let n = null;
  switch (t + "*" + e) {
    case "2*4":
    case "2*5":
      n = {
        iconScale: 0.5,
        colGap: 0.3,
        rowGap: 0.2,
        searchScale: 0.82
      };
      break;
    case "2*6":
      n = {
        iconScale: 0.6,
        colGap: 0.3,
        rowGap: 0.3,
        searchScale: 0.9
      };
      break;
    case "2*7":
      n = {
        iconScale: 0.7,
        colGap: 0.3,
        rowGap: 0.3,
        searchScale: 0.9
      };
      break;
    case "3*3":
      n = {
        iconScale: 0.7,
        colGap: 0.24,
        rowGap: 0.2,
        searchScale: 0.82
      };
  }
  return n;
};