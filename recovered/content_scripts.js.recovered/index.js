window.addEventListener("message", function e(r) {
  if (r.source !== window || !r.data || !r.data.key) {
    return;
  }
  const {
    key: n,
    message: t
  } = r.data;
  chrome.runtime.sendMessage({
    key: n,
    data: t
  }, () => {
    if (chrome.runtime.lastError) {
      console.warn("sendMessage: ", chrome.runtime.lastError.message);
    }
  });
  window.removeEventListener("message", e, false);
  window.close();
}, false);
window.onbeforeunload = () => {
  chrome.runtime.sendMessage({
    key: "cancelLogin"
  }, () => {
    if (chrome.runtime.lastError) {
      console.warn("sendMessage: ", chrome.runtime.lastError.message);
    }
  });
};