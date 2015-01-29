#!/usr/bin/env node

var fs = require('fs');
var program = require('commander');
var match = require('minimatch');
var log = require('npmlog');

//var colors = require('colors');
//var prompt = require('prompt');

//var htmlHandler = require('./html')
//var javaHandler = require('./java')
//var cHandler = require('./c')

program
	.version('0.0.1')
/*
program
	.command('')
	.option()
	.option()
*/
program
	.usage('<filename>.<extension> [option]');


/* create command parser */
var parser = program.parse(process.argv);
var filename;
/* check for the command line arguments */
if (parser.args.length === 0) 
	parser.outputHelp();
else if((filename = parser.args[0]))
{
	/*
	//DEBUG
	process.argv.forEach(function(str){ console.log(str);});	// include "node" and "filename"
	console.log('\n======\n');
	parser.args.forEach(function(str){ console.log(str);});		// exclude "node" and "filename"
	*/	
	if(!match(filename, '*.*'))
	{
		program.outputHelp();
		process.exit();
	}
}

console.log(filename);

if(fs.existsSync(filename))
{
	log.error('not ok','File already exists!');  //log.*('prefix', 'message');
	process.exit();
}
