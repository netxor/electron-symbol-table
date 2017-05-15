import * as global from './global';

const reset = () => {

  global.list = [];
  global.counter = 0;
  global.totalCompare = 0;
  document.getElementById("compare").innerHTML = 0;
  document.getElementById("totalCompare").innerHTML = 0;
  document.getElementById("tod").innerHTML = "";
  document.getElementById("counter").innerHTML = 0;
  document.getElementById("search-id").value = "";
  document.getElementById('found-id').innerHTML = "НЕ";

}

export default reset;
