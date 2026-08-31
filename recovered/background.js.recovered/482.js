if (typeof requestIdleCallback == "undefined") {
  let t = 20;
  self.requestIdleCallback = function (e) {
    return setTimeout(() => {
      if (t < 50) {
        t += 20;
      }
      const n = Date.now();
      e({
        didTimeout: false,
        timeRemaining: function () {
          return Math.max(0, 50 - (Date.now() - n));
        }
      });
    }, t);
  };
}