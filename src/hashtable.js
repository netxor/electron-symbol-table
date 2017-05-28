import * as message from './message-box';
import * as global from './global';

function HashTable() {
  this.SIZE = 225;
  this.currentSize = 0;
  this.storage = new Array(this.SIZE);
}

function hashCode(string, size) {
  var hash = 0;
  if (string.length == 0) return hash;
  for (let i = 0; i < string.length; i++) {
    var letter = string.charCodeAt(i);
    hash = ((hash<<5)-hash)+letter;
    hash = hash & hash;
  }
  return Math.abs(hash) % size ;
}

HashTable.prototype.rehash = function(resize, size) {
  resize ? this.SIZE *= 2 : this.SIZE = Math.ceil(this.SIZE / 2);
  this.currentSize = 0;
  let storage = this.storage;
  this.storage = new Array(this.SIZE);
  storage.forEach(obj => {
    for (let key in obj) {
      let hashKey = hashCode(key, this.SIZE);
      if (!this.storage[hashKey]) {
        let tempObj = {};
        tempObj[key] = obj[key];
        this.storage[hashKey] = tempObj;
      } else {
        this.storage[hashKey][key] = obj[key];
        this.currentSize++;
      }
    }
  })
}

HashTable.prototype.set = function(key, value) {
  let hashKey = hashCode(key, this.SIZE);
    if (!this.storage[hashKey]) {
      let obj = {};
      obj[key] = value;
      this.storage[hashKey] = obj;
      this.currentSize++;
    } else {
      this.storage[hashKey][key] = value;
      this.currentSize++;
    }
  if (this.currentSize >= 0.75 * this.SIZE) {
    this.rehash();
  }
};

HashTable.prototype.get = function(key) {
  let hashKey = hashCode(key, this.SIZE);
  let compareHash = 0;
  let averageHash = 0;

  compareHash++;
  global.totalCompareHash++;

  if (averageHash != 0) {
    global.averageHash = global.totalCompareHash / global.counter;
  } else {
    averageHash = compareHash;
  }

  document.getElementById('compareHash').innerHTML = compareHash;
  document.getElementById('totalCompareHash').innerHTML = global.totalCompareHash;
  document.getElementById('averageHash').innerHTML = averageHash.toFixed(2);
  document.getElementById('found-id-hash').innerHTML = "НЕ";

  if (this.storage[hashKey]) {
    document.getElementById('found-id-hash').innerHTML = "";
    console.log('найдено');
    return console.log(this.storage[hashKey][key]);
  } else {
    return console.log("не найдено");
  }
}

HashTable.prototype.remove = function(key) {
  let value = this.get(key);
  let hashKey = hashCode(key, this.SIZE);
  if (value) delete this.storage[hashKey][key];
  if (!Object.keys(this.storage[hashKey]).length) {
    this.storage[hashKey] = undefined;
    this.currentSize--;
  }
  if (this.currentSize <= 0.25 * this.SIZE && this.SIZE > 16) {
    this.rehash(false);
  }
  return value;
}

var hash = new HashTable();

export const hashFill = () => {
  for (let i = 0; i < global.list.length; i++) {
    hash.set(global.list[i], global.list[i]);
  }
  console.log(hash);
}

export const hashIter = () => {
  const current = document.getElementById("search-id").value;

  if (current === "") {
    return;
  }

  hash.get(current);
}

export const removeHash = () => {
  //for (let i = 0; i < global.list.length; i++) {
    hash.remove('one');
    console.log(hash);
  //}
}
