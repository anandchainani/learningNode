// practise for file systems 

// fs is the module which is requried to access files systems

//two ways to access filesystem module 

// const fs = require('fs');
const {readFileSync,writeFileSync}=require('fs')

//reading a file 
let note1 = readFileSync('./practise/note.txt','utf-8')
let note2 = readFileSync('./practise/note 2.txt','utf-8')
console.log(note1);
console.log(note2);

//writting a file and creaating a new file 
writeFileSync('./practise/output.txt',`this is the data which is derived from two files file no 1: ${note1}, this is the data from second file: ${note2}`);

//appending the two files

writeFileSync('./practise/output2.txt',`appending two files, file 1 ${note1}, file 2 ${note2} `,{flag:'a'})