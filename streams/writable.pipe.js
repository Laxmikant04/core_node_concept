// Including stream module 
const stream = require('stream'); 
  
// Creating a stream and creating  
// a write function 
const writer = new stream.Writable({ 
  
  // Write function with its  
  // parameters 
  write: function(chunk, encoding, next) { 
  
    // Converting the chunk of 
    // data to string 
    console.log(chunk.toString()); 
    next(); 
  } 
}); 

const reader = new stream.Readable({ 
  
    // Write function with its  
    // parameters 
    read: function( next) { 
        return "abc"
    } 
  }); 

writer.on('pipe', (src) => {
  console.log('Something is piping into the writer.');
});
reader.pipe(writer);