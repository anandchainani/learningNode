//importing as an object 
console.log('this is working');

//importing the module 
const acc = require('./objExporting');
console.log(acc.add(2,2));
console.log(acc.divide(2,2));
console.log(acc.sub(2,2));
console.log(acc.multiply(2,2));