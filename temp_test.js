//var mocha = require('mocha');

var c = require('./context');
var g = new c();

var mockFilename = 'Tname';
var mockBasename = 'Test';
var mockExtension = 'Text';

console.log('g.makeHTML():\n' + g.makeHTML() + '\n');
console.log('-----------------------------------\n');
console.log('g.makeHTML(\'--no-script\'):\n' + g.makeHTML('--no-script') + '\n');
console.log('-----------------------------------\n');
console.log('g.makeHTML(\'--no-link\'):\n' + g.makeHTML('--no-link') + '\n');
console.log('-----------------------------------\n');
console.log('g.makeHTML(\'--html4\'):\n' + g.makeHTML('--html4') + '\n');

console.log('===================================\n');
console.log('g.makeJava(mockBasename):\n' + g.makeJava(mockBasename) + '\n');

console.log('===================================\n');
/* in mocha is a test suite( describe or it?)*/
console.log('c.C:\n' + c.C + '\n');	// a test case

console.log('===================================\n');
console.log('c.CPP:\n' + c.CPP + '\n');