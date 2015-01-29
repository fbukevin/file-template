
/* Only define context string here */

/**
 * Extracting some component keep the flexibility to change string content if tag is set.
 * For example, we will implement HTML with --no-script, --no-link
 */

/* HTML */
var doctype = '<!DOCTYPE>\n';
var doctype4 = '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"\n\t'
			 + '"http://www.w3.org/TR/html4/strict.dtd">\n';
var title = '\t\t<title></title>\n';
var script = '\t\t<script type="text/javascript" src="*.js"></script>\n';
var link = '\t\t<link href="*.css" rel="stylesheet" type="text/css">\n';
var	HTML_BEFORE = '<html>\n\t<head>\n';
var HTML_AFTER = '\t</head>\n\t<body>\n\t</body>\n</html>\n';

/* Java */
var JAVA_BEFORE = 'import java.lang.*;\n\nclass ';
var JAVA_AFTER = '\tpublic static void main(String[] args){\n'
			 + '\n\n\t\tSystem.out.println("");\n\n\t\treturn 0\n\t}\n}';
 

/* C */
var cHeader = '#include<stdio.h>\n#include<stdlib.h>\n\n';
var	C = cHeader + 'int main(int argc, char* argv[])\n{\n\n\tprintf("\\n");\n\treturn 0;\n}';

/* C++*/
var cppHeader = '#include<iostream>\n\n';
var	CPP = cppHeader + 'int main(void)\n{\n\n\tcout << "" << endl;\n\treturn 0;\n}';


var Context = function (){
	/* constructor of class Context */
};

/* main definition of class Context*/
Context.prototype = {
	/*
	 * Generate HTML file context
	 *
	 * @para {string} option: ['--no-script', '--no-link', '--html4'] 
	 */
	makeHTML: function(option){
		var html;

		switch(option){
			case '--no-script':
				html = doctype + HTML_BEFORE + title + link + HTML_AFTER;
				break;
			case '--no-link':
				html = doctype + HTML_BEFORE + title + script + HTML_AFTER;
				break;
			//case '--no-title':
			//case '--no-s-l': //no script and no link
			case '--html4':
				html = doctype4 + HTML_BEFORE + title + script + link + HTML_AFTER;
				break;
			default:
				html = doctype + HTML_BEFORE + title + script + link + HTML_AFTER;
				break;
		}		
		return html;
	},

	/**
	 * Generate Java file context
	 * 
	 * @para {string} className: name of main class
	 */
	makeJava: function(className){ 
		return JAVA_BEFORE + className + '{\n' + JAVA_AFTER;
	}
};


//Context.HTML = HTML;
//Context.JAVA_BEFORE = JAVA_BEFORE;
//Context.JAVA_AFTER = JAVA_AFTER;
Context.C = C;
Context.CPP = CPP;


window.create = new Context();	// for karma availability

//module.exports = Context;		// in karma we don't need it

