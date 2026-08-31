var r = require("./1.js");
exports.a = r.b`.global-scrollbar {
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: #ddd #f2f2f2;
}
.global-scrollbar::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
.global-scrollbar::-webkit-scrollbar-thumb {
  border-radius: 3px;
  background-color: transparent;
  border: 1px dashed transparent;
  background-clip: padding-box;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.global-scrollbar::-webkit-scrollbar-thumb:hover,
.global-scrollbar:hover::-webkit-scrollbar-thumb:hover {
  background-color: #ccc;
  background-clip: border-box;
}
.global-scrollbar::-webkit-scrollbar-track {
  background-color: transparent;
}
.global-scrollbar:hover::-webkit-scrollbar-thumb {
  background-color: #ddd;
}
@media only screen and (hover: none) {
  .global-scrollbar::-webkit-scrollbar-thumb {
    background-color: #ddd;
  }
}
`;