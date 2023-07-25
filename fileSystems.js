// working with fiile systems 

//importing the module 
// fs is module that is used for working with file system
// can be done using two diffrent methods synchonous and asynchronous 
const {readFileSync,writeFileSync} = require('fs');

//getting the file and printing it onto the console
const first = readFileSync('./practise/note.txt','utf-8');
console.log(first);

//getting the file and printing it onto the console
const second = readFileSync('./practise/note 2.txt','utf-8');
console.log(second);


//creating a new file
writeFileSync('./practise/results.txt',`here is the result ${first}, ${second},$`,{flag:'a'});
