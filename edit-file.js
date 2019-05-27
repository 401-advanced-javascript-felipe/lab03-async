'use strict';
const fs = require('fs');
const faker = require('faker');


let fileName = process.argv[2];

let readAndWrite = (file) => {
  let fakeInfo = faker.name.findName();

  console.log(`Reading ${file}`);

  fs.readFile(`files/${file}`, 'utf8',(err, data) => {
    if (err) throw err;
    console.log('Reading inside the file: ', data);

    fs.writeFile(`files/${file}`, `${fakeInfo}`, (err) => {
      if (err) throw err;
      console.log('Writing a new name...');

      fs.readFile(`files/${file}`, 'utf8',(err, data) => {
        if (err) throw err;
        console.log('Reading inside the file: ', data);
      });
    });
  });
};

readAndWrite(fileName);
