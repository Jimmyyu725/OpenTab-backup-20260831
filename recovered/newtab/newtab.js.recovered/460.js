export function a(t) {
  const e = new URL(chrome.runtime.getURL("/_favicon/"));
  e.searchParams.set("pageUrl", t);
  e.searchParams.set("size", "32");
  return e.toString();
}