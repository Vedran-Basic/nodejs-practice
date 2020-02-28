const fs = require('fs');
const folderPath = './';
const path = require('path');
const { logpls } = require('./exp.js');
const util = require('util');
console.clear();
const readdir = util.promisify(fs.readdir);

    fs.mkdir(path.join(__dirname, '/test'), {}, err=>{
        if(err) throw err;
        console.log('Folder created...');
    });

fs.writeFile(
    path.join(__dirname, '/test', 'hello.txt'),
    "lolololo",
    err =>{
   if(err) throw err;
   console.log("File written!")
});