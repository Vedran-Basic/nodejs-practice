const fs = require('fs');
const folderPath = './';
const {logpls} = require('./exp.js');
    const files = await fs.readdir(folderPath, (err, files)=>{
      logpls(files);
      return files;
    });


logpls("asdas");
logpls(module)
foldering
