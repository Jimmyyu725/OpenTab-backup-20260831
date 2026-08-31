(function () {
  "use strict";

  exports.stripBOM = function (t) {
    if (t[0] === "﻿") {
      return t.substring(1);
    } else {
      return t;
    }
  };
}).call(this);