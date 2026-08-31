var n = require(/*webcrack:missing*/"./1585.js");
var o = require(/*webcrack:missing*/"./4522.js");
var a = require(/*webcrack:missing*/"./3131.js");
var i = require(/*webcrack:missing*/"./4003.js");
var c = require(/*webcrack:missing*/"./661.js");
var s = c;
const l = [i18n("星期天"), i18n("星期一"), i18n("星期二"), i18n("星期三"), i18n("星期四"), i18n("星期五"), i18n("星期六")];
const u = [...Array(35)].map((e, t) => {
  let r = t + 1;
  r = r < 10 ? "0" + r : r;
  return `${i.c1}/hitab/celebrity-widget/large/celebrity_${r}_large.jpg`;
});
const f = [...Array(35)].map((e, t) => {
  let r = t + 1;
  r = r < 10 ? "0" + r : r;
  return `${i.c1}/hitab/celebrity-widget/medium/celebrity_${r}_medium.jpg`;
});
const d = [...Array(35)].map((e, t) => {
  let r = t + 1;
  r = r < 10 ? "0" + r : r;
  return `${i.c1}/hitab/celebrity-widget/background/celebrity_${r}.jpg`;
});
const h = s();
const p = {
  updateTime: 0,
  modalShow: false,
  words: i.sM ? {
    form: "《三体》",
    formWho: "刘慈欣",
    hitokoto: "我们都是阴沟里的虫子，但总还是得有人仰望星空"
  } : {
    form: "",
    formWho: "Martin Luther King",
    hitokoto: "To do the right thing, any time is a good time"
  },
  currentDate: {
    weekday: l[h.day()],
    date: i.sM ? h.format("YYYY年MM月DD日") : h.format("YYYY-MM-DD")
  },
  bgImage: {
    randomNum: 0,
    large: u[1],
    medium: f[1],
    modal: d[1]
  }
};
var g = require("./8287.js");
var y = require(/*webcrack:missing*/"./1475.js");
const v = (0, a.Q_)(o.BU.celebrity, {
  syncStorage: {
    watch: ["words", "bgImage", "updateTime"]
  },
  state: () => ({
    ...p
  }),
  actions: {
    setModal(e) {
      this.modalShow = e;
    },
    saveWordsData(e) {
      this.words = {
        ...this.words,
        ...e
      };
    },
    saveBgImageData(e) {
      this.bgImage = {
        ...this.bgImage,
        ...e
      };
    },
    loadOrRefreshWordsData() {
      const e = this.updateTime;
      const t = Date.now();
      if (s(e).add(1, "day").get("date") <= s(t).get("date")) {
        this.refreshWords();
      }
    },
    async refreshWords() {
      const [e, t] = i.sM ? await (async () => {
        try {
          const e = await g.hj.post("https://v1.hitokoto.cn/?c=d&c=e&c=h&c=i&c=k", {}, {
            _single: true
          });
          if (e) {
            return [null, {
              formWho: e.from_who || "佚名",
              hitokoto: e.hitokoto || "",
              form: `《${e.from}》` || ""
            }];
          }
          throw e;
        } catch (e) {
          return ["catch error"];
        }
      })() : await (async () => {
        try {
          const e = await fetch("https://api.api-ninjas.com/v1/quotes", {
            headers: {
              "X-Api-Key": "PYP49gtoPPS3aDxgWeZzig==xjJf3oA01gItulfv"
            }
          });
          const t = await e.json();
          if (t) {
            return [null, {
              formWho: t[0].author || "unknown",
              hitokoto: t[0].quote || "",
              form: ""
            }];
          }
          throw t;
        } catch (e) {
          return ["catch error"];
        }
      })();
      if (!e) {
        this.saveWordsData(t || {});
        this.updateTime = Date.now();
      }
    },
    async prefetchModalBg(e) {
      await (0, y.pt)((0, y.Em)(e, "default", 1024), true);
    },
    async setRandomBg() {
      const e = (this.bgImage.randomNum + 1) % u.length;
      await this.prefetchModalBg(d[e]);
      this.saveBgImageData({
        randomNum: e,
        large: u[e],
        medium: f[e],
        modal: d[e]
      });
    },
    updateData() {
      const e = s();
      this.refreshWords();
      this.currentDate = {
        weekday: l[e.day()],
        date: e.format("YYYY年MM月DD日")
      };
    }
  }
});
var b = require("./6261.js");
export const V = (0, a.Q_)(o.BU.setting, {
  syncStorage: {
    watch: ["searchOpenMethod", "iconOpenMethod", "followSystem", "theme", "trigger", "leftBarDisplayStatus", "leftBarDisplaySide", "bottomBarDisplayStatus", "searchBoxShow", "searchSuggestionsShow", "searchHistoryShow", "keepSearchInput", "fastSwitchSearchEngine", "dockScaleRatio", "addIconShow", "iconSize", "iconAreaPercentValue", "lockLayout", "layoutWidth", "scrollPageEnable", "iconAutoFill", "hideIconName", "globalFont", "minimalistSwitchBtnStatus", "minimalistMode", "showClock", "showChineseCalendar", "showCalendar", "show24HR", "showCelebrity", "showDock", "celebrityLastTime", "showCategoryTitle", "showIcp"]
  },
  syncCloud: {
    watch: ["searchOpenMethod", "iconOpenMethod", "followSystem", "theme", "trigger", "leftBarDisplayStatus", "leftBarDisplaySide", "bottomBarDisplayStatus", "searchBoxShow", "searchSuggestionsShow", "searchHistoryShow", "keepSearchInput", "fastSwitchSearchEngine", "addIconShow", "iconSize", "iconAreaPercentValue", "lockLayout", "layoutWidth", "scrollPageEnable", "iconAutoFill", "hideIconName", "globalFont", "minimalistSwitchBtnStatus", "minimalistMode", "showClock", "showChineseCalendar", "showCalendar", "show24HR", "showCelebrity", "showDock", "celebrityLastTime", "showCategoryTitle", "showIcp"]
  },
  state: () => ({
    settingsShow: false,
    trigger: [],
    keepAlive: false,
    searchOpenMethod: "new-tab",
    iconOpenMethod: "new-tab",
    followSystem: true,
    systemTheme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
    theme: "light",
    leftBarDisplayStatus: "show",
    leftBarDisplaySide: "left",
    bottomBarDisplayStatus: "hide",
    searchBoxShow: true,
    searchSuggestionsShow: true,
    searchHistoryShow: false,
    keepSearchInput: true,
    fastSwitchSearchEngine: true,
    addIconShow: true,
    dockScaleRatio: (0, b.xL)(),
    dockScaleing: false,
    iconSize: b.$j,
    iconAreaPreview: false,
    iconAreaPercentValue: 50,
    iconAreaPercentPreviewValue: 50,
    lockLayout: !(window.screen.width <= n.qf),
    lockLayoutPreview: false,
    layoutWidth: b.gi,
    layoutWidthPreview: b.gi,
    scrollPageEnable: true,
    iconAutoFill: true,
    hideIconName: false,
    iconNameShortcutStatus: false,
    globalFont: b.Df,
    mobileSideBarShow: false,
    minimalistSwitchBtnStatus: "show",
    minimalistMode: false,
    showClock: true,
    showChineseCalendar: true,
    showCalendar: true,
    show24HR: true,
    showCelebrity: true,
    showDock: true,
    celebrityLastTime: Date.now(),
    showCategoryTitle: true,
    showIcp: true
  }),
  getters: {
    iconAreaPercent() {
      if (this.iconAreaPreview) {
        return this.iconAreaPercentPreviewValue;
      } else {
        return this.iconAreaPercentValue;
      }
    },
    iconLockLayout() {
      if (this.iconAreaPreview) {
        return {
          lock: this.lockLayoutPreview,
          width: this.layoutWidthPreview
        };
      } else {
        return {
          lock: this.lockLayout,
          width: this.layoutWidth
        };
      }
    },
    dockIconHeight() {
      return Math.round(this.dockScaleRatio * 28 / 100) + 32;
    },
    dockIconFontPx() {
      return `${Math.round(this.dockIconHeight * 0.63)}px`;
    },
    dockIconRadiusPx() {
      return `${Math.round(this.dockIconHeight * 0.27)}px`;
    },
    dockWrapperHeight() {
      return Math.round(this.dockScaleRatio * 42 / 100) + 44;
    },
    docWrapperPadding() {
      return Math.round((this.dockWrapperHeight - this.dockIconHeight) / 2) - this.docIconBoxPadding;
    },
    docIconBoxPadding() {
      return Math.round(((this.dockWrapperHeight - 2 - this.dockIconHeight) / 2 + this.dockWrapperHeight / 21) / 2);
    },
    currentTheme() {
      if (this.followSystem) {
        return this.systemTheme;
      } else {
        return this.theme;
      }
    },
    hideIconNameStatus() {
      return this.hideIconName && !this.iconNameShortcutStatus;
    }
  },
  actions: {
    showIconAreaPreview() {
      this.lockLayoutPreview = this.lockLayout;
      if (this.lockLayoutPreview) {
        this.layoutWidthPreview = this.layoutWidth;
      }
      this.iconAreaPreview = true;
    },
    setIconAreaPercentPreviewValue(e) {
      this.iconAreaPercentPreviewValue = e;
    },
    cancelIconAreaPreview() {
      this.iconAreaPreview = false;
    },
    submitIconAreaPreview() {
      this.iconAreaPreview = false;
      this.iconAreaPercentValue = this.iconAreaPercentPreviewValue;
      this.layoutWidth = this.layoutWidthPreview;
      this.lockLayout = this.lockLayoutPreview;
    },
    setIconAreaPreviewValue(e) {
      this.iconAreaPercentPreviewValue = e;
      this.setLockLayoutPreview(false);
    },
    changeDockScaleRatio(e) {
      const t = this.dockScaleRatio + e;
      this.dockScaleRatio = t > 100 ? 100 : t < 0 ? 0 : t;
    },
    setDockScaleing(e) {
      this.dockScaleing = e;
    },
    changeSettingShow(e) {
      this.settingsShow = e;
    },
    changeKeepAlive(e) {
      this.keepAlive = e;
    },
    changeSystemTheme(e) {
      this.systemTheme = e;
    },
    changeLeftBarDisplayStatus(e) {
      this.leftBarDisplayStatus = e;
    },
    changeBottomBarDisplayStatus(e) {
      this.bottomBarDisplayStatus = e;
    },
    setLockLayoutPreview(e) {
      this.lockLayoutPreview = e;
      if (e) {
        this.calcLayoutWidth();
      }
    },
    calcLayoutWidth() {
      this.layoutWidthPreview = document.querySelector(".icon-scroll-content").clientWidth || 1000;
    },
    setIconNameShortcutStatus(e) {
      this.iconNameShortcutStatus = e;
    },
    setLeftBarDisplaySide(e) {
      this.leftBarDisplaySide = e;
    },
    changeSidebarShow(e) {
      this.mobileSideBarShow = e;
    },
    setMinimalistSwitchBtnStatus(e) {
      this.minimalistSwitchBtnStatus = e;
    },
    setMinimalistMode(e) {
      this.minimalistMode = e;
    },
    setShowClock(e) {
      this.showClock = e;
    },
    setShowChineseCalendar(e) {
      this.showChineseCalendar = e;
    },
    setShowCalendar(e) {
      this.showCalendar = e;
    },
    setShow24HR(e) {
      this.show24HR = e;
    },
    setShowCelebrity(e) {
      this.showCelebrity = e;
    },
    setShowDock(e) {
      this.showDock = e;
    },
    updateCelebrityLastTime() {
      v().refreshWords();
      this.celebrityLastTime = Date.now();
    },
    setShowCategoryTitle(e) {
      this.showCategoryTitle = e;
    }
  }
});
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => {
  V().changeSystemTheme(e.matches ? "dark" : "light");
});