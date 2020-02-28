const util = require('util');
const fs = require('fs');
const folderPath = './';
const {logpls} = require('./exp.js');
console.clear();
const readdir = util.promisify(fs.readdir);
readdir(folderPath).then((data)=>{
    data.forEach(currentItem => {
        console.log(currentItem);
    });    
});


logpls("asdas");


