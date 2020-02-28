import {Person} from './person';
import {logpls} from './exp';


const person = () =>{
    new Person("Vbas", 21);
    logpls(person);
}

module.exports.person = person;