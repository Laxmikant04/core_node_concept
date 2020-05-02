const { PassThrough, Writable } = require('stream');
const pass = new PassThrough();
pass.on('data', (chunk) => {
  console.log(`Received ${chunk.length} bytes of data.`);
  pass.pause();
  console.log('There will be no additional data for 1 second.');
  pass.write("hello") // will be consumed/logged after one sec
  setTimeout(() => {
    console.log('Now data will start flowing again.');
    pass.resume();
  }, 1000);
});


pass.write("hello")