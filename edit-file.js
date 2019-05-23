'use strict';
const fs = require('fs');
const faker = require('faker');


let fileName = process.argv[2];

let readAndWrite = (file, cb) => {
  let fakeInfo = faker.name.findName();

  console.log(`Reading ${file}`);
  cb(file);
  setTimeout(() => {
    writingFile(fakeInfo, cb(file));
  },500);
};


let readingFile = (fileName) => {
  fs.readFile(`files/${fileName}`, 'utf8',(err, data) => {
    if (err) throw err;
    console.log('Reading inside the file: ', data);
  });
};

let writingFile = (newText, cb) => {
  fs.writeFile('files/test.txt', `${newText}`, (err) => {
    if (err) throw err;
    console.log('Writing a new name');
    cb;
  });
};

readAndWrite(fileName, readingFile);
