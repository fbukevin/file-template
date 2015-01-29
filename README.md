#File Template
When you are going to quickly create a file for testing or practicing a programming language, you might need to create it and write down some code manually. Some codes of most of your same language programs may appear again and again and again...., blablabla.

For example, if you're just a newbie study C programming language. The most codes in your practice files might contains such like this:
```c
#include<stdio.h>
#include<stdlib.h>

int main(int argc, char* argv[])
{
	printf("Hello World!");
	return 0;
}
```

Haha, this is not a hello world generator. Alright, `printf("");`, instead, is the most used. Anyway, if you need to retype this snippet every time. It implies that it should be automatically generated. That's what this program does. It deal with most **common** part of each language.


#Install
`npm insall -g file-template`

#Usage
`ftemplate <filename>.<extension> [options]`

###Options:

* `--help`
* create without
	* `--no-script`: create without `<script>` tag
	* `--no-link`: create without `<link>` tag
* create with (future work)
	* `--with-form`: create with form (contains input text box and submit button)
	* `--with-string.h`: create with string.h
* with standard
	* `-html4`: use html doctype before HTML5	

##example

* Create an HTML:
`ftemplate index.html`

```html
<!DOCTYPE>
<html>
	<head>
		<tilte></title>
		<script ></script> <!-- JavaScript Loader -->
		<link> <!-- CSS loader-->
	</head>
	<body>		
	</body>
</html>
```

* Create a C file

* Create an HTML with no `<script type="javascript" src=""></script>` tag

* Create a C file without function:

* Create a Java file without class:

#Test
We use two test drivers with sinon and mocha libraries to launch test:
1. mocha (recommend)
	`mocha *_test.js` (這樣只會側同一目錄中的，下層目錄的不會進去，因此不會側到 karma 的)
2. karma with mocha：說明基本上差異
	`karma start chrome.conf.js` or `karma start firefox.conf.js`

#Changelog

#Contribution
We are very welcome any feedback or new template provided. Please contact me with fbukevin@gmail.com. Or you can just clone this repository. Thanks in advanced. Hope you like this.
