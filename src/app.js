const fs = require('fs')
const path = require('path')
const {dialog} = require('electron').remote

import iter from './iter';
import fileOpen from './dialog';
import reset from './reset';

document.getElementById("btn-readfile").addEventListener("click", fileOpen, false);
document.getElementById("btn-reset").addEventListener("click", reset, false);
document.getElementById("btn-search-id").addEventListener("click", iter, false);
