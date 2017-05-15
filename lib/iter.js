'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _messageBox = require('./message-box');

var message = _interopRequireWildcard(_messageBox);

var _global = require('./global');

var global = _interopRequireWildcard(_global);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var iter = function iter() {

  var compare = 0;

  var current = document.getElementById("search-id").value;

  if (current === "") {

    message.inputToFind();
    return;
  }

  global.counter++;
  document.getElementById("counter").innerHTML = counter;

  for (var i = 0; i < global.list.length; i++) {

    compare++;
    global.totalCompare++;

    document.getElementById('compare').innerHTML = compare;
    document.getElementById('totalCompare').innerHTML = global.totalCompare;
    document.getElementById('found-id').innerHTML = "НЕ";

    if (current === global.list[i]) {
      document.getElementById('found-id').innerHTML = "";
      return;
    }
  }
};

exports.default = iter;