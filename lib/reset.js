"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _global = require("./global");

var global = _interopRequireWildcard(_global);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var reset = function reset() {

  global.list = [];
  global.counter = 0;
  global.totalCompare = 0;
  document.getElementById("compare").innerHTML = 0;
  document.getElementById("totalCompare").innerHTML = 0;
  document.getElementById("tod").innerHTML = "";
  document.getElementById("counter").innerHTML = 0;
  document.getElementById("search-id").value = "";
  document.getElementById('found-id').innerHTML = "НЕ";
};

exports.default = reset;