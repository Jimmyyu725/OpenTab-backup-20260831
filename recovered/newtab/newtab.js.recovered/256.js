var r = require("./5.js");
var i = r;
require("./7.js");
var o = require("./0.js");
var _a = require("./23.js");
var s = _a;
var c = require("./467.js");
var u = c;
export const a = new class {
  constructor() {
    this.errorList = [];
    this.clearAllData = async () => {
      try {
        await s.removeItem("old-data");
        await s.removeItem("error-data");
      } catch (t) {}
    };
  }
  getLocalData() {
    const t = {};
    for (let e = 0, n = localStorage.length; e < n; e++) {
      const n = localStorage.key(e);
      t[n] = localStorage.getItem(n);
    }
    return t;
  }
  async getIndexedData() {
    const t = {};
    try {
      await s.iterate((e, n) => {
        t[n] = e;
      });
      return t;
    } catch (t) {
      await this.trackOnError(t);
      return null;
    }
  }
  async getOldData() {
    try {
      return await s.getItem("old-data");
    } catch (t) {
      await this.trackOnError(t);
      return null;
    }
  }
  async getBadVersionLocalData() {
    try {
      const t = await s.getItem("old-data");
      const {
        localData: e
      } = t;
      return e;
    } catch (t) {
      return null;
    }
  }
  async getErrorData() {
    try {
      return await s.getItem("error-data");
    } catch (t) {
      await this.trackOnError(t);
      return null;
    }
  }
  async getDataRecord() {
    try {
      return await s.getItem("data-record");
    } catch (t) {
      return null;
    }
  }
  async exportDebugData() {
    const t = await this.getOldData();
    const e = await this.getErrorData();
    const n = await this.getDataRecord();
    let r = {};
    if (!o.s) {
      r = await new i(t => chrome.storage.local.get(null, t));
    }
    return {
      oldData: t,
      errorData: e,
      localData: this.getLocalData(),
      chromeData: r,
      recordData: n
    };
  }
  async backupOldData(t, e) {
    try {
      const n = this.getLocalData();
      const r = await new i(t => chrome.storage.local.get(null, t));
      let a;
      let c;
      if (t) {
        a = await this.getIndexedData();
      }
      if (e === o.D && o.i && o.e === "pro") {
        c = await this.getBadVersionLocalData();
      }
      await s.setItem("old-data", {
        localData: n,
        chromeData: r,
        indexedData: a,
        beforeUpdateVersion: e,
        badVersionLocalData: c,
        version: o.C.extVersion
      });
    } catch (t) {
      await this.trackOnError(t);
    }
  }
  async track(t, e) {
    if (t) {
      try {
        const n = await s.getItem("error-data");
        if (n && n.length > this.errorList.length) {
          this.errorList = n;
        }
        if (this.errorList.some(e => e.message === t)) {
          return;
        }
        this.errorList.push({
          message: t,
          errMessage: e == null ? undefined : e.message,
          time: new Date().toLocaleString()
        });
        await s.setItem("error-data", u(this.errorList, 30));
      } catch (t) {
        await this.trackOnError(t);
      }
    }
  }
  async trackOnError(t) {
    let e = "";
    try {
      const n = await new i(t => chrome.storage.local.get("error-data", t));
      if (!Array.isArray(n["error-data"])) {
        n["error-data"] = [];
      }
      if (typeof t == "string") {
        e = t;
      } else if (t && typeof t == "object" || t instanceof Error) {
        e = t.message;
      }
      n["error-data"].push({
        message: "trackOnError",
        errMessage: e,
        time: new Date().toLocaleString()
      });
      await new i(t => chrome.storage.local.set(n, t));
    } catch (t) {
      localStorage.setItem("error-data", JSON.stringify({
        message: "trackOnError",
        errMessage: e,
        time: new Date().toLocaleString()
      }));
    }
  }
}();