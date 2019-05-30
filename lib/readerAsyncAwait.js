'use strict';

const fs = require('fs');
/**
 * Our module exports a single function that expects an array of files
 * @type {function(*=)}
 */
module.exports = exports = (files) => {
  // The console.log is an empty array.
  return readAll(files);
};

/**
 * This wraps the fs module, primarily so that we can more easily write tests around it.
 * @param file
 * @param callback
 */
const readOne =  (file, callback) => {
  fs.readFile(file, (err, data) => {
    if(err) { callback(err);}
    else {
      callback(undefined, data);
    }
  });
};

/**
 * Reads and returns the contents of 3 files
 * Requires 3 paths, otherwise, it'll fail with aggression
 * @param paths
 */
const readAll = async (paths) => {
  let contents = [];
  try{
    for(const file of paths) {
      await readOne(file, (err, data) =>  {
        if(err) throw err;
        else {
          // Contents is receiving data
          contents.push(data.toString().toString().trim());
        }
      });
    }
    return contents;
  }
  catch(err){
    console.log(err);
  }
};


