import * as message from './message-box';
import * as global from './global';

const iter = () => {

  let compare = 0;

  const current = document.getElementById("search-id").value;

  if (current === "") {

    message.inputToFind();
    return;

  }

  global.counter++;
  document.getElementById("counter").innerHTML = counter;

  for (let i = 0; i < global.list.length; i++) {

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

}

export default iter;
