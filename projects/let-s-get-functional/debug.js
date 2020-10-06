'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-mmelean");
const index = require('./index.js');
const data = require('./data/customers.json');


//const femaleCount = index.femaleCount;
//console.log(femaleCount(data));
const oldestCustomer = index.oldestCustomer;
console.log(oldestCustomer(data));

