const EventEmitter = require('events');
const {logpls} = require('../exp');
class MyEmitter extends EventEmitter{ }

const myEmitter = new MyEmitter();

myEmitter.on('event', ()=>{
    logpls(" event fired")
})

myEmitter.emit('event');
