var r = require("./215.js");
var o = r;
require("./7.js");
var i = require("./34.js");
export const b = async t => {
  try {
    const e = "AUDIO_PLAYBACK";
    await l("off_screen/index.html", e);
    i.b.sendToRuntime({
      action: i.a.BG_PLAY_AUDIO,
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
    await l("off_screen/index.html", e);
    return await i.b.sendToRuntime({
      action: i.a.BG_GET_LOCAL_STORAGE,
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
    await l("off_screen/index.html", e);
    await i.b.sendToRuntime({
      action: i.a.BG_REMOVE_LOCAL_STORAGE,
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
    await l("off_screen/index.html", n);
    await i.b.sendToRuntime({
      action: i.a.BG_SET_LOCAL_STORAGE,
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
let f;
async function l(t, e) {
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
        const t = await o(n = self.clients).call(n);
        return await t.some(t => t.url.includes(chrome.runtime.id));
      }
    }(t)) {
      return;
    }
    if (f) {
      await f;
    } else {
      f = chrome.offscreen.createDocument({
        url: t,
        reasons: [e],
        justification: "Specifies that the offscreen document is responsible for playing audio."
      });
      await f;
      f = null;
    }
  } catch (t) {}
}