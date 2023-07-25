// common JS, every file is module by default
// modules - allows you to distribute code among various files, encapsulate the code share minimum

//imoporting module

const names = require('./modulesVariables');
const sayHI = require('./modulesFunction')
const sum = require('./modulesFunction')
// console.log(names);

// sayHI(names.informer);
const result = sum.sum(3,4);
console.log(result);
// console.log(informer);