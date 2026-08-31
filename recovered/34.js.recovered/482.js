if (typeof requestIdleCallback == "undefined") {
  let e = 20;
  self.requestIdleCallback = function (n) {
    return setTimeout(() => {
      if (e < 50) {
        e += 20;
      }
      const t = Date.now();
      n({
        didTimeout: false,
        timeRemaining: function () {
          return Math.max(0, 50 - (Date.now() - t));
        }
      });
    }, e);
  };
}