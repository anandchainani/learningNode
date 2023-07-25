// working with file paths in node js 
// node has a built in module called as at


const path = require('path');

// console.log(path); 
//will return back path object 

//path seperator is not a function 
// console.log(path.sep);

//joining filepaths (no need of actual file to be present)
const pth = path.join('/practise','notes','biology notes','chapter1.txt');

console.log(`this is path after path join`);
console.log(pth);

console.log('this is the base name of the file');
console.log(path.basename(pth));

//absolute path 
const absolute = path.resolve(__dirname,'practise','note.txt');
console.log(absolute);