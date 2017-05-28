import * as message from './message-box';
import * as global from './global';

const iter = () => {
  let compare = 0;
  let averageIter = 0;

  const current = document.getElementById("search-id").value;

  if (current === "") {
    message.inputToFind();
    return;
  }

  global.counter++;
  document.getElementById("counter").innerHTML = global.counter;

  for (let i = 0; i < global.list.length; i++) {
    compare++;
    global.totalCompareIter++;

    if (averageIter != 0) {
      averageIter = global.totalCompareIter / global.counter;
    } else {
      averageIter = compare;
    }

    document.getElementById('compare').innerHTML = compare;
    document.getElementById('totalCompareIter').innerHTML = global.totalCompareIter;
    document.getElementById('averageIter').innerHTML = averageIter.toFixed(2);
    document.getElementById('found-id').innerHTML = "НЕ";

    if (current === global.list[i]) {
      document.getElementById('found-id').innerHTML = "";
      return;
    }
  }
}

export default iter;
