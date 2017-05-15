'use strict';

var _iter = require('./iter');

var _iter2 = _interopRequireDefault(_iter);

var _dialog = require('./dialog');

var _dialog2 = _interopRequireDefault(_dialog);

var _reset = require('./reset');

var _reset2 = _interopRequireDefault(_reset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fs = require('fs');
var path = require('path');

var dialog = require('electron').remote.dialog;

document.getElementById("btn-readfile").addEventListener("click", _dialog2.default, false);
document.getElementById("btn-reset").addEventListener("click", _reset2.default, false);
document.getElementById("btn-search-id").addEventListener("click", _iter2.default, false);