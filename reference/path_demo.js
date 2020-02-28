const path = require('path');
const {logpls} = require('../exp')

//base file name
console.log(path.dirname(__filename));

logpls(path.extname(__filename));

logpls(path.parse(__filename));

logpls(path.join(__filename, "auth", "register"));