var r = require("./0.js");
var o = require("./1.js");
var i = require("./85.js");
var s = i;
export const a = new class {
  constructor() {
    this._attached = false;
    this._throttleFn = s(this.onBookmarksChange, 300);
  }
  start() {
    chrome.permissions.contains({
      origins: [],
      permissions: ["bookmarks"]
    }, t => {
      if (!this._attached && t) {
        this._watchBookmarks();
      }
    });
  }
  _watchBookmarks() {
    this._attached = true;
    chrome.bookmarks.onCreated.addListener(this._throttleFn);
    chrome.bookmarks.onChanged.addListener(this._throttleFn);
    chrome.bookmarks.onMoved.addListener(this._throttleFn);
    chrome.bookmarks.onRemoved.addListener(this._throttleFn);
    if (!r.g) {
      chrome.bookmarks.onChildrenReordered.addListener(this._throttleFn);
    }
  }
  startWatchBookmarks() {
    this.start();
  }
  onBookmarksChange() {
    o.a.sendMessage("master:tabs-update-bookmarks");
  }
}();