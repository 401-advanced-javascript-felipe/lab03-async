'use strict';



const fs = require('fs');


let editFile = (fileName) => {
  fs.readFile('/etc/passwd', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
};
