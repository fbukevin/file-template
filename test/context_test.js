
var assert = require('chai').assert;	// assertion library
var Context = require('../lib/context');	// module to be test
var create = new Context();				// instantiate module 

var mockBasename = 'Test';	// replaced with sinon object?


describe("HTML", function(){
	it('should equal to string HTML', function(){
		var HTML = '<!DOCTYPE>\n<html>\n\t<head>\n\t\t<title></title>\n'
				+ '\t\t<script type="text/javascript" src="*.js"></script>\n'
				+ '\t\t<link href="*.css" rel="stylesheet" type="text/css">\n' 
				+ '\t</head>\n\t<body>\n\t</body>\n</html>\n';
		assert.equal(create.makeHTML(), HTML);
	});

	it('should equal to string HTML without <script>', function(){
		var HTML = '<!DOCTYPE>\n<html>\n\t<head>\n\t\t<title></title>\n'
				+ '\t\t<link href="*.css" rel="stylesheet" type="text/css">\n' 
				+ '\t</head>\n\t<body>\n\t</body>\n</html>\n';
		assert.equal(create.makeHTML('--no-script'), HTML);
	});

	it('should equal to string HTML without <link>', function(){
		var HTML = '<!DOCTYPE>\n<html>\n\t<head>\n\t\t<title></title>\n'
				+ '\t\t<script type="text/javascript" src="*.js"></script>\n'
				+ '\t</head>\n\t<body>\n\t</body>\n</html>\n';
		assert.equal(create.makeHTML('--no-link'), HTML);
	});

	it('should equal to string HTML of HTML <!DOCTYPE>', function(){
		var HTML = '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"\n\t'
			 	+ '"http://www.w3.org/TR/html4/strict.dtd">\n'
				+ '<html>\n\t<head>\n\t\t<title></title>\n'
				+ '\t\t<script type="text/javascript" src="*.js"></script>\n'
				+ '\t\t<link href="*.css" rel="stylesheet" type="text/css">\n' 
				+ '\t</head>\n\t<body>\n\t</body>\n</html>\n';
		assert.equal(create.makeHTML('--html4'), HTML);
	});
});//end_of_describe('HTML')

describe('Java', function(){
	it('should equal t string JAVA', function(){
		var JAVA = 'import java.lang.*;\n\nclass ' + mockBasename 
				 + '{\n\tpublic static void main(String[] args){\n'
			 	 + '\n\n\t\tSystem.out.println("");\n\n\t\treturn 0\n\t}\n}';
		assert.equal(create.makeJava(mockBasename), JAVA);
	});
});//end_of_describe('Java')

describe('C', function(){
	it('should equal t string C', function(){
		var C = '#include<stdio.h>\n#include<stdlib.h>\n\n'
			  + 'int main(int argc, char* argv[])\n{\n\n\tprintf("\\n");\n\treturn 0;\n}';
		assert.equal(Context.C, C);
	});	
});//end_of_describe('C')

describe('C++', function(){
	it('should equal to string CPP', function(){
		var CPP = '#include<iostream>\n\nint main(void)\n{\n\n\tcout << "" << endl;\n\treturn 0;\n}';
		assert.equal(Context.CPP, CPP);
	});
});//end_of_describe('C++')
