const fse = require('fs-extra');
const path = require('path');

// console.clear();
// fse.mkdir(path.join(__dirname, '/test'))
//     .then(()=>{
//     console.log("fse.mkdir executed");
// }).catch((err)=>{
//     console.log("lool, ", err);
// });

const myobj ={
    "email":"wega.baso@a.com",
    "password":"123456abc",
    "city":"Osijek",
    "dob":"09-04-1998",
    "address":"Kestenova 1"
}

fse.writeFile(
    path.join(__dirname, './test', 'hello.txt'),
    "abababababa");
let opaca ={};
fse.outputJson("test/data.json", myobj)
    .then(()=>
            fse.readJson("test/data.json"))
            .then(data=>{
                console.log(data);
            })
    .catch(err => console.log(err));
