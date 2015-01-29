#!/usr/bin/env node

var fs = require('fs');
var path = require('path');
var program = require('commander');
var match = require('minimatch');
var log = require('npmlog');
var Context = require('./context');
var create = new Context();

program
	.version('0.0.1')
	.usage('<filename>.<extension> [option]')
	.option('--no-script','Create HTML without <script> tag')
	.option('--no-link', 'Create HTML without <link> tag')
	.option('--html4', 'Create HTML with old <!DOCTYPE> tag')

/* create command parser */
var parser = program.parse(process.argv);
var filename;
/* check for the command line arguments */
if (parser.args.length === 0) 
{
	parser.outputHelp();
	process.exit();
}
else if((filename = parser.args[0]))
{
	/*
	//DEBUG
	process.argv.forEach(function(str){ console.log(str);});	// include "node" and "filename"
	console.log('\n======\n');
	parser.args.forEach(function(str){ console.log(str);});		// exclude "node" and "filename"
	*/	

	/* check format */
	if(!match(filename, '*.*'))
	{
		program.outputHelp();
		process.exit();
	}
}

log.info('input filename: ' + filename);

/* check if file exists */
if(fs.existsSync(filename))
{
	log.error('not ok','File already exists!');  //log.*('prefix', 'message');
	process.exit();
}

var fileExtension = path.extname(filename);
var basename = path.basename(filename, fileExtension);	// avoid format '/**/filename'
var options = '';
//console.log(fileExtension);
//console.log(basename);

var writeString;

switch(fileExtension){
	case '.html':
		if(!program.link)	// --no-link: program.link => false
			options = '--no-link';
		else if(!program.script)
			options = '--no-script';
		else if(program.html4)
			options = '--html4';
		writeString = create.makeHTML(options);
		break;
	case '.java':
		// Java filename of main class is as same as class name
		writeString = create.makeJava(basename);
		break;
	case '.c':
		writeString = Context.C;
		break;
	case '.cpp':
	case '.cc':			
		writeString = Context.CPP;
		break;
	default:
		log.silly('sorry', 'File type not supported.');
		process.exit();
}

/* create file */
try{
	fs.openSync(filename, 'w');
	log.info('ok', 'File created.');
}catch(e){
	log.error('not ok', 'File created failed.');
	process.exit();
}

try{
	fs.writeFileSync(filename, writeString);	
	log.info('ok', 'File write completed!');
	log.info('ok', 'Congratulation!');
}
catch(e){
	log.error('not ok', e);
}

process.exit();
