// Including stream module 
const stream = require('stream'); 
  
// Creating a stream and creating  
// a write function 
const writable = new stream.Writable({ 
  
  // Write function with its  
  // parameters 
  write: function(chunk, encoding, next) { 
  
    // Converting the chunk of 
    // data to string 
    console.log(chunk.toString()); 
    next(); 
  } 
}); 
  
// Writing data 
writable.write('GeeksforGeeks'); 
  
// Emitting close event 
writable.on('finish', () => { 
    console.log("finish called!"); 
}); 


// Calling end function 
writable.end(); 

// Shows that the program ends 
console.log("program is ended."); 