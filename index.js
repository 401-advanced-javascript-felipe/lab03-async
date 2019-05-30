'use strict';

// For Promises
// const fileReader = require('./lib/readerPromises.js');
// For Callbacks
// const fileReader = require('./lib/reader.js');
// For Async Await
const fileReader = require('./lib/readerAsyncAwait.js');



// Obtain and assert input
let files = process.argv.slice(2);

if( ! (files instanceof Array && files.length) ) {
  throw new Error('Invalid Args');
}

// For Promises
// fileReader(files)
//   .then(console.log);
// For Callbacks

// fileReader(files, (err,data) => {
//   if ( err ) { throw err; }
//   console.log('From Callback:', data);

// });


try {
  fileReader(files)
    .then(data =>{
      console.log('in index', data);
    });
}
catch(err){
  console.log(err);
}
