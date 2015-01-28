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
	* `--no-link: create without `<link>` tag
	* `--no-function`: create without function
	* `--no-class`: create without class
* create with
	* `--with-form`: create with form (contains input text box and submit button)
	* --with-string.h: create with string.h
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

#Changelog

#Contribution
We are very welcome any feedback or new template provided. Please contact me with fbukevin@gmail.com. Or you can just clone this repository. Thanks in advanced. Hope you like this.


\=============================

python 和 node 都做吧！然後發佈至 pip 和 npm (先做 node)
如果 pip 不適合安裝執行檔，python 的部份可以就發佈執行檔，不用 pip

這種功能有兩種實作方式：
1. 在程式中把 template format 寫好，產生新檔案並且寫入檔案		=> 只需要一個程式檔，但程式碼會越來越多
2. 提供樣板檔案，用 cp => 程式包檔案會越來越多，程式主體比較小，不能夠只下載主程式執行檔(除非打包在一個執行檔)

Name it "filetemplate" which is the short for "template"

同一種檔案可以加不同參數
例如 html 加入 -ns: no script tag, -nl: no link tag, -4: use html doctype below HTML5

不需要輸入要產生的樣板程式語言，程式應該根據副檔名自己判斷就好，有一些附檔名應該被禁止，限定只能用英文加數字命名


