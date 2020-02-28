// const Person = require('./person.js');
// const Logger =require('./logger');
// const {logpls} = require('./exp');
//
// const person1 = new Person('Vbasic', 30);
// person1.greeting();
//
//
// const lager= new Logger();
// lager.on('message', (data)=> logpls(`called listener`, data));
//
// lager.log('Hello World');


const http = require('http');
const path= require('path');
const fs = require('fs');

const server = http.createServer((req, res)=>{
    if(req.url ==='/'){
        res.end('<h1>Home  alone</h1>');
    }
    console.log(req.url);
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () =>console.log("Server running on port", PORT));
