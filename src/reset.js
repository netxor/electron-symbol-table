import * as global from './global';
import {removeHash} from './hashtable';

const reset = () => {
  global.list = [];
  global.counter = 0;
  global.totalCompareIter = 0;
  global.totalCompareHash = 0;
  document.getElementById("compare").innerHTML = '-';
  document.getElementById("compareHash").innerHTML = '-';
  document.getElementById("totalCompareIter").innerHTML = '-';
  document.getElementById("totalCompareHash").innerHTML = '-';
  document.getElementById("tod").innerHTML = "";
  document.getElementById("counter").innerHTML = '-';
  document.getElementById("search-id").value = "";
  document.getElementById('found-id').innerHTML = "НЕ";
  document.getElementById('found-id-hash').innerHTML = "НЕ";
  removeHash();
}

export default reset;
