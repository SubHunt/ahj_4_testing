import "./css/style.css";

import "./js/app";

import '../licenses.txt';

function info() {
    const m = new Map();
    m.set('name', 'ajs');
    m.set('version', '1.0.0');
    return m;
  }
  
  export default {
    info
  };
