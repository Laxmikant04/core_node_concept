const fs = require('fs')

//here test is a dictonary not a file , 
const ws = fs.createWriteStream('test')
ws.on('error', err => console.log('error', err.message))
ws.on('finish', () => console.log('finish'))
ws.end()