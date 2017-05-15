'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inputToFind = exports.identifiersLength = undefined;

var _global = require('./global');

var global = _interopRequireWildcard(_global);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var identifiersLength = exports.identifiersLength = function identifiersLength() {
  dialog.showMessageBox({
    type: 'info',
    message: 'Считано ' + global.list.length + ' идентификаторов',
    buttons: ['OK']
  });
};

var inputToFind = exports.inputToFind = function inputToFind() {
  dialog.showMessageBox({
    type: 'error',
    message: 'Введите искомое значение',
    buttons: ['OK']
  });
};