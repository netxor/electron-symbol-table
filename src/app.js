const fs = require('fs')
const path = require('path')
const {dialog} = require('electron').remote

import iter from './dist/iter';
import {hashIter} from './dist/hashtable';
import fileOpen from './dist/dialog';
import reset from './dist/reset';

document.getElementById("btn-readfile").addEventListener("click", fileOpen, false);
document.getElementById("btn-reset").addEventListener("click", reset, false);
document.getElementById("btn-search-id").addEventListener("click", function() {
  iter();
  hashIter();
}, false);
