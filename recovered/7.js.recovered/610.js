import * as n from /*webcrack:missing*/"./5.js";
var s = n;
require(/*webcrack:missing*/"./7.js");
import * as a from /*webcrack:missing*/"./2.js";
import * as o from /*webcrack:missing*/"./22.js";
import * as c from /*webcrack:missing*/"./24.js";
import * as r from /*webcrack:missing*/"./309.js";
import * as l from /*webcrack:missing*/"./0.js";
const d = {
  100: i18n("w_100"),
  101: i18n("w_101"),
  102: i18n("w_102"),
  103: i18n("w_103"),
  104: i18n("w_104"),
  200: i18n("w_200"),
  201: i18n("w_201"),
  202: i18n("w_202"),
  203: i18n("w_203"),
  204: i18n("w_204"),
  205: i18n("w_205"),
  206: i18n("w_206"),
  207: i18n("w_207"),
  208: i18n("w_208"),
  209: i18n("w_209"),
  210: i18n("w_210"),
  211: i18n("w_211"),
  212: i18n("w_212"),
  213: i18n("w_213"),
  300: i18n("w_300"),
  301: i18n("w_301"),
  302: i18n("w_302"),
  303: i18n("w_303"),
  304: i18n("w_304"),
  305: i18n("w_305"),
  306: i18n("w_306"),
  307: i18n("w_307"),
  308: i18n("w_308"),
  309: i18n("w309"),
  310: i18n("w_310"),
  311: i18n("w_311"),
  312: i18n("w_312"),
  313: i18n("w_313"),
  314: i18n("w_314"),
  315: i18n("w_315"),
  316: i18n("w_316"),
  317: i18n("w_317"),
  318: i18n("w_318"),
  399: i18n("w_399"),
  400: i18n("w_400"),
  401: i18n("w_401"),
  402: i18n("w_402"),
  403: i18n("w_403"),
  404: i18n("w_404"),
  405: i18n("w_405"),
  406: i18n("w_406"),
  407: i18n("w_407"),
  408: i18n("w_408"),
  409: i18n("w_409"),
  410: i18n("w_410"),
  499: i18n("w_499"),
  500: i18n("w_500"),
  501: i18n("w_501"),
  502: i18n("w_502"),
  503: i18n("w_503"),
  504: i18n("w_504"),
  507: i18n("w_507"),
  508: i18n("w_508"),
  509: i18n("w_509"),
  510: i18n("w_510"),
  511: i18n("w_511"),
  512: i18n("w_512"),
  513: i18n("w_513"),
  514: i18n("w_514"),
  515: i18n("w_515"),
  900: i18n("w_900"),
  901: i18n("w_901"),
  999: i18n("w_999")
};
const u = {
  alyBGColor(e) {
    let t = "#36B3FF";
    switch (e.conditionCode) {
      case "100":
      case "101":
      case "102":
      case "103":
      case "104":
        t = "#0F7CFF";
        break;
      case "200":
      case "201":
      case "202":
      case "203":
      case "204":
      case "205":
      case "206":
        t = "#10BDFF";
        break;
      case "207":
      case "208":
      case "209":
      case "210":
      case "211":
      case "212":
        t = "#096BB2";
        break;
      case "213":
      case "900":
        t = "#FF7F3B";
        break;
      case "300":
      case "301":
      case "302":
      case "303":
      case "304":
      case "305":
      case "306":
      case "307":
      case "308":
      case "309":
      case "310":
      case "311":
      case "312":
      case "313":
      case "314":
      case "315":
      case "316":
      case "317":
      case "318":
      case "399":
        t = "#427BD1";
        break;
      case "301":
      case "300":
      case "402":
      case "403":
      case "404":
      case "405":
      case "406":
      case "407":
      case "408":
      case "409":
      case "410":
      case "4991":
        t = "#87A6D5";
        break;
      case "500":
      case "501":
      case "502":
      case "503":
      case "504":
      case "505":
      case "506":
      case "507":
      case "508":
      case "509":
      case "510":
      case "511":
      case "512":
      case "513":
      case "514":
      case "515":
      case "999":
        t = "#98A6BD";
        break;
      default:
        t = "#0441C5";
    }
    return t;
  },
  alyWIcon: e => `${l.a}/weather/code_${e.conditionCode}.png`,
  alyText: e => d[e.conditionCode]
};
function p(e, t, i) {
  let n;
  let s;
  if (t === "celsius") {
    n = e;
    s = "°C";
  } else {
    n = Math.floor(e * 1.8 + 32);
    s = "°F";
  }
  if (i) {
    n += s;
  }
  return n;
}
import * as h from /*webcrack:missing*/"./311.js";
import * as g from /*webcrack:missing*/"./13.js";
function b(e, t, i, n) {
  var s;
  var a = arguments.length;
  var o = a < 3 ? t : n === null ? n = Object.getOwnPropertyDescriptor(t, i) : n;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
    o = Reflect.decorate(e, t, i, n);
  } else {
    for (var c = e.length - 1; c >= 0; c--) {
      if (s = e[c]) {
        o = (a < 3 ? s(o) : a > 3 ? s(t, i, o) : s(t, i)) || o;
      }
    }
  }
  if (a > 3 && o) {
    Object.defineProperty(t, i, o);
  }
  return o;
}
function y(e, t) {
  var i = {};
  for (var n in e) {
    if (Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0) {
      i[n] = e[n];
    }
  }
  if (e != null && typeof Object.getOwnPropertySymbols == "function") {
    var s = 0;
    for (n = Object.getOwnPropertySymbols(e); s < n.length; s++) {
      if (t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[s])) {
        i[n[s]] = e[n[s]];
      }
    }
  }
  return i;
}
class m extends r.a {
  constructor() {
    super(...arguments);
    this.localData = {};
    this.list = [];
    this.lastUpdated = +new Date();
    this.unit = "celsius";
    this.isShowModal = false;
    this.isShowSetting = false;
    this.searchState = "none";
    this.citys = [];
  }
  get formateList() {
    return this.list.filter(e => e.items).map(e => {
      var t = y(e, []);
      t.items = t.items.map((e, t) => {
        var i = y(e, []);
        if (t === 0) {
          i._bgColor = u.alyBGColor(i);
          i._text = u.alyText(i);
        }
        i._bgImg = u.alyWIcon(i);
        return i;
      });
      return t;
    });
  }
  sortList(e) {
    this.list = e;
  }
  changeIndex(e, t) {
    if (e === t) {
      return;
    }
    let n = [...this.list];
    const s = n.findIndex(t => t.cid === e);
    if (s === -1) {
      return;
    }
    if (t === "bottom") {
      const [e] = n.splice(s, 1);
      n.push(e);
    } else if (t === "top") {
      const [e] = n.splice(s, 1);
      n.unshift(e);
    } else {
      const e = n.findIndex(e => e.cid === t);
      if (e === -1) {
        return;
      }
      const [i] = n.splice(s, 1);
      n.splice(e, 0, i);
    }
    const a = this.list.filter(e => e.top)[0]?.name || "";
    if (a === e || a === t) {
      n = this.list.map(e => e.top ? Object.assign(Object.assign({}, e), {
        top: 0
      }) : e);
    }
    this.list = n;
  }
  openModal() {
    this.isShowModal = true;
  }
  closeModal() {
    this.isShowModal = false;
    this.searchCitys("");
  }
  updateList(e) {
    this.list = e;
  }
  diffRemote(e) {
    if ((e == null ? undefined : e.list)?.length !== this.list.length) {
      return true;
    }
    if (this.unit !== e.unit) {
      return true;
    }
    return this.list.some((t, i) => t.cid !== e.list[i].cid);
  }
  async mergeRemote(e, t) {
    if (e.list) {
      try {
        const i = await this.getWeatherByCid(e.list);
        Object(a.i)(() => {
          this.unit = e.unit;
          if (t) {
            this.list = i;
          } else {
            const e = this.list;
            const t = i;
            const {
              result: n
            } = c.a.mergeArray(e, t, "cid", "updateTime");
            this.list = n;
          }
        });
      } catch (e) {}
    }
  }
  async getWeatherByCid(e) {
    e = e.filter(e => e.name && e.cid && e.items);
    return await s.all(e.map(async e => {
      if (e.cid) {
        const t = await o.h.getForecastWeather(e.cid);
        if (t == null ? undefined : t.data) {
          return Object.assign(Object.assign({}, t.data), {
            name: e.name
          });
        }
      }
    }));
  }
  async initLocal() {
    const e = await o.h.getLocalCity();
    Object(a.i)(() => {
      if (e) {
        this.localData = e.data;
      }
    });
  }
  async addCity(e, t) {
    const {
      data: i
    } = await o.h.getForecastWeather(e);
    if (!i) {
      throw new Error(i18n("no_current_city_weather_data"));
    }
    Object(a.i)(() => {
      for (const t in this.list) {
        if (this.list[t].cid === e) {
          throw new Error(i18n("repeat_city"));
        }
      }
      this.list.push(Object.assign(Object.assign({}, i), {
        cid: e,
        name: t
      }));
      this.lastUpdated = +new Date();
      this.closeModal();
    });
  }
  async searchCitys(e) {
    if (!e) {
      this.citys = [];
      this.searchState = "none";
      return;
    }
    this.searchState = "ing";
    try {
      const {
        data: t
      } = await o.h.getCityList(e);
      if (t) {
        Object(a.i)(() => {
          if (t.status === 200) {
            this.searchState = "done";
            const e = t.cities.filter(e => !this.filterCity(e.cid));
            this.citys = e;
          }
        });
      } else {
        Object(a.i)(() => {
          this.searchState = "error";
        });
      }
    } catch (e) {
      Object(a.i)(() => {
        this.searchState = "error";
      });
    }
  }
  filterCity(e) {
    const t = e.substr(e.length - 1);
    return /^[a-zA-Z]+$/.test(t);
  }
  changeSelected(e, t) {
    this.citys[e].selected = t;
  }
  deleteCityWeather(e) {
    let t = -1;
    for (const i in this.list) {
      if (e === this.list[i].cid) {
        t = Number(i);
      }
    }
    this.list.splice(t, 1);
    this.lastUpdated = +new Date();
  }
  changeUnit() {
    this.unit = this.unit === "celsius" ? "fahrenheit" : "celsius";
    h.a.sendEvent({
      settingAction: {
        weatherUnit: this.unit
      }
    });
  }
  toggleSetting() {
    this.isShowSetting = !this.isShowSetting;
  }
  closeSetting() {
    this.isShowSetting = false;
  }
  reset() {
    this.isShowSetting = false;
    this.isShowModal = false;
  }
  toTop(e, t) {
    this.list = this.list.map(i => i.cid === e ? Object.assign(Object.assign({}, i), {
      top: t === 0 ? 1 : 0
    }) : Object.assign(Object.assign({}, i), {
      top: 0
    })).sort((e, t) => t.top - e.top);
  }
  toggleOpen(e) {
    this.list = this.list.map(t => t.cid === e ? Object.assign(Object.assign({}, t), {
      open: t.open === 0 ? 1 : 0
    }) : Object.assign({}, t));
  }
}
b([a.g], m.prototype, "localData", undefined);
b([a.g], m.prototype, "list", undefined);
b([a.g], m.prototype, "lastUpdated", undefined);
b([a.g], m.prototype, "unit", undefined);
b([a.g], m.prototype, "isShowModal", undefined);
b([a.g], m.prototype, "isShowSetting", undefined);
b([a.g], m.prototype, "searchState", undefined);
b([a.g], m.prototype, "citys", undefined);
b([a.e], m.prototype, "formateList", null);
b([a.b], m.prototype, "sortList", null);
b([a.b], m.prototype, "changeIndex", null);
b([a.b], m.prototype, "openModal", null);
b([a.b], m.prototype, "closeModal", null);
b([a.b], m.prototype, "updateList", null);
b([a.b], m.prototype, "mergeRemote", null);
b([a.b], m.prototype, "addCity", null);
b([a.b], m.prototype, "searchCitys", null);
b([a.b], m.prototype, "changeSelected", null);
b([a.b], m.prototype, "deleteCityWeather", null);
b([a.b], m.prototype, "changeUnit", null);
b([a.b], m.prototype, "toggleSetting", null);
b([a.b], m.prototype, "closeSetting", null);
b([a.b], m.prototype, "reset", null);
b([a.b], m.prototype, "toTop", null);
b([a.b], m.prototype, "toggleOpen", null);
export const weatherStore = new m();
weatherStore.initSyncStore(g.o, ["localData", "list", "unit", "lastUpdated"], {});
weatherStore.initAutoBackup("weather", ["list", "unit"]);
export const getCurrentWeather = () => {
  const e = weatherStore.formateList[0];
  const t = e == null ? undefined : e.items[0];
  if (!t) {
    return {};
  }
  return {
    name: p(t.tmpMax, weatherStore.unit, true),
    bgColor: t._bgColor,
    bgImg: t._bgImg
  };
};
Object(a.c)(() => {
  if (weatherStore.list.some(e => !e || !e.cid)) {
    if (l.j) {
      alert("error");
    }
    Object(a.i)(() => {
      weatherStore.list = weatherStore.list.filter(e => (e == null ? undefined : e.name) && (e == null ? undefined : e.cid) && (e == null ? undefined : e.items));
    });
  }
});