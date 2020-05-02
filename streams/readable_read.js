const { PassThrough, Writable } = require('stream');
const pass = new PassThrough();

// pass.on('data', (chunk) => {
//   console.log(`Received ${chunk.length} bytes of data.`,chunk);
// });

pass.setEncoding('utf-8')
pass.write("hello")

console.log("result----",pass.read());