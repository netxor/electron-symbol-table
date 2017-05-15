const fs = require('fs')
const path = require('path')
const {dialog} = require('electron').remote

//const global = require('./global.js');

const fileOpen = () => {

  dialog.showOpenDialog((identifiers) => {

    if (identifiers === undefined) {

      console.log("Файл не выбран");
      return;

    }

    fs.readFile(identifiers[0], "utf-8", (err, data) => {

      if (err) throw err;
      list = data.toString().split('\n');

      var BST = new BinarySearchTree();

      for (let i = 0; i < list.length; i++) {
        BST.insertNode(list[i]);
      }

      console.log(BST);

      select = document.getElementById("tod");

      for (index in list) {
        select.options[select.options.length] = new Option(list[index], index);
      }

      dialog.showMessageBox({

        type: 'info',
        message: 'Считано ' + list.length + ' идентификаторов',
        buttons: ['OK']

      });

    });

  });

}
