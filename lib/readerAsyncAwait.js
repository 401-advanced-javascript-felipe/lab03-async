'use strict';

const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
/**
 * Our module exports a single function that expects an array of files
 * @type {function(*=)}
 */
module.exports = exports = async (files) => {
  try {
    return await readAll(files);
  }catch(e){
    throw e;
  }




};

/**
 * This wraps the fs module, primarily so that we can more easily write tests around it.
 * @param file
 * @param callback
 */
const readOne = async (file) => {
  try{
    let result = await readFile(file);
    return result;
  }catch(e){
    throw e;
  }
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
      let data = await readOne(file);
      contents.push(data.toString().trim());
    }
    return contents;
  }
  catch(e){
    throw e;
  }
};


