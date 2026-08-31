var r = require("./215.js");
var i = r;
require("./7.js");
var o = require("./34.js");
export const b = async t => {
  try {
    const e = "AUDIO_PLAYBACK";
    await h("off_screen/index.html", e);
    o.b.sendToRuntime({
      action: o.a.BG_PLAY_AUDIO,
      from: "background",
      to: "offscreen",
      payload: {
        audioUrl: chrome.runtime.getURL(t)
      }
    });
  } catch (t) {
    console.error(t);
  }
};
export const a = async t => {
  try {
    const e = "LOCAL_STORAGE";
    await h("off_screen/index.html", e);
    return await o.b.sendToRuntime({
      action: o.a.BG_GET_LOCAL_STORAGE,
      payload: {
        key: t
      },
      from: "background",
      to: "offscreen",
      needResponse: true
    });
  } catch (t) {
    console.error(t);
  }
};
export const c = async t => {
  try {
    const e = "LOCAL_STORAGE";
    await h("off_screen/index.html", e);
    await o.b.sendToRuntime({
      action: o.a.BG_REMOVE_LOCAL_STORAGE,
      payload: {
        key: t
      },
      from: "background",
      to: "offscreen",
      needResponse: true
    });
  } catch (t) {
    console.error(t);
  }
};
export const d = async (t, e) => {
  try {
    const n = "LOCAL_STORAGE";
    await h("off_screen/index.html", n);
    await o.b.sendToRuntime({
      action: o.a.BG_SET_LOCAL_STORAGE,
      payload: {
        key: t,
        valueStr: e
      },
      from: "background",
      to: "offscreen",
      needResponse: true
    });
  } catch (t) {
    console.error(t);
  }
};
let l;
async function h(t, e) {
  try {
    if (await async function (t) {
      const e = chrome.runtime.getURL(t);
      if ("getContexts" in chrome.runtime) {
        const t = await chrome.runtime.getContexts({
          contextTypes: ["OFFSCREEN_DOCUMENT"],
          documentUrls: [e]
        });
        return Boolean(t.length);
      }
      {
        var n;
        const t = await i(n = self.clients).call(n);
        return await t.some(t => t.url.includes(chrome.runtime.id));
      }
    }(t)) {
      return;
    }
    if (l) {
      await l;
    } else {
      l = chrome.offscreen.createDocument({
        url: t,
        reasons: [e],
        justification: "Specifies that the offscreen document is responsible for playing audio."
      });
      await l;
      l = null;
    }
  } catch (t) {}
}