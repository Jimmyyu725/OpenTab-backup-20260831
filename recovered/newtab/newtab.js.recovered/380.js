module.exports = function (t, e) {
  e = e.split(":")[0];
  if (!(t = +t)) {
    return false;
  }
  switch (e) {
    case "http":
    case "ws":
      return t !== 80;
    case "https":
    case "wss":
      return t !== 443;
    case "ftp":
      return t !== 21;
    case "gopher":
      return t !== 70;
    case "file":
      return false;
  }
  return t !== 0;
};