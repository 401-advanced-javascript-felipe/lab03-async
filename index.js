'use strict';


// For Callbacks
// const fileReader = require('./lib/reader.js');

// For Promises
// const fileReader = require('./lib/readerPromises.js');

// For Async Await
const fileReader = require('./lib/readerAsyncAwait.js');


// Obtain and assert input
let files = process.argv.slice(2);

if( ! (files instanceof Array && files.length) ) {
  throw new Error('Invalid Args');
}

// For Callbacks
// fileReader(files, (err,data) => {
//   if ( err ) { throw err; }
//   console.log('From Callback:', data);
// });

// For Promises
// fileReader(files)
//   .then(console.log);

// For Aync Await
fileReader(files)
  .then(console.log);
