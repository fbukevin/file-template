#File Template
When you are going to quickly create a file for testing or practicing a programming language, you might need to create it and write down some code manually. Some codes of most of your same language programs may appear again and again and again...., blablabla.

For example, if you're just a newbie studying C programming language. The most codes in your practice files might contains such like this:
```c
#include<stdio.h>
#include<stdlib.h>

int main(int argc, char* argv[])
{
	printf("Hello World!");
	return 0;
}
```

Haha, this is not a hello world generator. Alright, `printf("");`, instead, is the most used. Anyway, if you need to retype this snippet every time, it implies that it should be automatically generated. That's what this program does. It deal with most **common** part of each language.


#Install
`npm insall -g file-template`

#Usage
`ftemplate <filename>.<extension> [options]`

Current support programming languages: 
* HTML
* Java
* C
* C++
* C#

###Options:

* `--help`
* create without
	* `--no-script`: create without `<script>` tag
	* `--no-link`: create without `<link>` tag
* with standard
	* `-html4`: use html doctype before HTML5	

##example

* Create an HTML: `ftemplate index.html`

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

* Create a Java file: `ftemplate hello.java`

	```java
	import java.lang.*;
	
	class hello{
		public static void main(String[] args){
		
			System.out.println("");
			
			return 0;
		}
	}
	```

* Create an HTML with no `<script type="text/javascript" src=""></script>` tag:
	
	`ftemplate index.html --no-script`

#Test
We use two test drivers with Sinon and Mocha libraries to launch test, they should be installed as a global command in your computer in advanced:

1. Mocha (recommend)
 
	1. `cd test`
	2. `mocha *_test.js`	

2. Karma with Mocha：
	
	You can stay in the root directory and just use folllowing commands to skin a cat. We primitively created two karma.conf.js for Karma, so you should have installed public version of Chrome or Firefox OS. 
	
	1. `karma start chrome.conf.js` 
	2. `karma start firefox.conf.js`

#Changelog

2015/02/14 Add C# context. (by larrywhy)

#Contribution
We are very welcome any feedback or new template provided. Please contact me with fbukevin@gmail.com. Or you can just clone this repository. Thanks for your courtesy. Hope you like this.
