import * as message from './message-box';
import * as global from './global';

const fileOpen = () => {

  dialog.showOpenDialog((identifiers) => {

    if (identifiers === undefined) {

      console.log("Файл не выбран");
      return;

    }

    fs.readFile(identifiers[0], "utf-8", (err, data) => {

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

}

export default fileOpen;
