//var mocha = require('mocha');


var Context = require('./context');
var create = new Context();

var mockFilename = 'Tname';
var mockBasename = 'Test';
var mockExtension = 'Text';

/***** unit	test of context.js	*****/
console.log('create.makeHTML():\n' + create.makeHTML() + '\n');
console.log('-----------------------------------\n');
console.log('create.makeHTML(\'--no-script\'):\n' + create.makeHTML('--no-script') + '\n');
console.log('-----------------------------------\n');
console.log('create.makeHTML(\'--no-link\'):\n' + create.makeHTML('--no-link') + '\n');
console.log('-----------------------------------\n');
console.log('create.makeHTML(\'--html4\'):\n' + create.makeHTML('--html4') + '\n');

console.log('===================================\n');
console.log('create.makeJava(mockBasename):\n' + create.makeJava(mockBasename) + '\n');

console.log('===================================\n');
/* in mocha is a test suite( describe or it?)*/
console.log('Context.C:\n' + Context.C + '\n');	// a test case

console.log('===================================\n');
console.log('Context.CPP:\n' + Context.CPP + '\n');


/***** test of ftemplate.js *****/
// -h
//- V
// command line argument
// create HTML
// create Java
// create C
// create C++
// file exist
// file open
// file create
// file write