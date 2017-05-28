import * as message from './message-box';
import * as global from './global';
import {hashFill} from './hashtable';

const fileOpen = () => {
  dialog.showOpenDialog((identifiers) => {
    if (identifiers === undefined) {
      console.log("Файл не выбран");
      return;
    }

    fs.readFile(identifiers[0], 'utf-8', (err, data) => {
      if (err) throw err;
      global.list = data.toString().split('\n');

      console.log(global.list);

      const select = document.getElementById("tod");

      for (const index in global.list) {
        select.options[select.options.length] = new Option(global.list[index], index);
      }

      hashFill();

      message.identifiersLength();
    });
  });
}

export default fileOpen;
