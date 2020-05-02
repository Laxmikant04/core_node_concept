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


// Emitting end event 
// writable.on('error', () => { 
//     console.log("ffffffgNo further operations will be performed!"); 
// }); 

// Emitting close event 
writable.on('close', () => { 
    console.log("No further operations will be performed!"); 
}); 

// Calling destroy function 
writable.destroy(); 

// Shows that the program ends 
console.log("program is ended."); 