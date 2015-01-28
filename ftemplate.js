#!/usr/bin/env node

var fs = require('fs');
var program = require('commander');
var colors = require('colors');
var prompt = require('prompt');

var htmlHandler = require('./html')
var javaHandler = require('./java')
var cHandler = require('./c')

program
	.version('0.0.1')

program
	.command('')
	.option()
	.option()

/* create command parser */
var parser = program.parse(process.argv);

/* check for the command line arguments */
if (parser.args.length === 0) {
    parser.outputHelp();
}