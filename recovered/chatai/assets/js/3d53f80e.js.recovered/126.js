var r = require("./3766.js");
exports.__esModule = true;
exports.default = function () {
  return {
    install: function (e) {
      e.mixins ||= [];
      e.mixins.push({
        emits: ["copy-code-success"],
        mounted: function () {
          var e = this;
          this.$nextTick(function () {
            o(e.$el).addEventListener("click", e.handleCopyCodeClick);
          });
        },
        beforeUnmount: function () {
          o(this.$el).removeEventListener("click", this.handleCopyCodeClick);
        },
        methods: {
          handleCopyCodeClick: function (e) {
            var t = e.target;
            if (t.classList.contains("v-md-copy-code-btn")) {
              var n = a(t.parentNode);
              if (n) {
                var r = n.querySelector("code").innerText;
                (0, i.default)(r);
                this.$emit("copy-code-success", r);
              }
            }
          }
        }
      });
    }
  };
};
var i = r(require("./819.js"));
function a(e) {
  if (e.classList.contains("v-md-pre-wrapper")) {
    return e;
  } else {
    return a(e.parentNode);
  }
}
function o(e) {
  var t = "v-md-editor-preview";
  if (e.classList.contains(t)) {
    return e;
  } else {
    return e.querySelector("." + t);
  }
}