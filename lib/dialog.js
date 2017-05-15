'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _messageBox = require('./message-box');

var message = _interopRequireWildcard(_messageBox);

var _global = require('./global');

var global = _interopRequireWildcard(_global);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var fileOpen = function fileOpen() {

  dialog.showOpenDialog(function (identifiers) {

    if (identifiers === undefined) {

      console.log("Файл не выбран");
      return;
    }

    fs.readFile(identifiers[0], "utf-8", function (err, data) {

      if (err) throw err;
      global.list = data.toString().split('\n');

      /*
      var BST = new BinarySearchTree();
       for (let i = 0; i < list.length; i++) {
        BST.insertNode(list[i]);
      }
       console.log(BST);
      */

      select = document.getElementById("tod");

      for (index in global.list) {
        select.options[select.options.length] = new Option(global.list[index], index);
      }

      message.identifiersLength();
    });
  });
};

exports.default = fileOpen;