## Requirements
Below is the stack used in this project. Please follow the getting started section in order to make this project run.

## Stack
	1. Backbonejs.
	2. Underscorejs.
	3. jQuery.
	4. Requirejs.
    5. [Backbone Localstorage](https://github.com/jeromegn/Backbone.localStorage) plugin.
	6. Underscorejs templates.
	7. HTML5 Local Storage.
	8. HTML5.
	9. Sass (with CSS and CSS3). Please install ruby and Sass if not installed on your machine.
	10. [Smacss](https://smacss.com/).
	12. JSHint.
	13. [CSSlint](https://github.com/CSSLint/csslint).
	14. [Bower](http://bower.io/).
	15. Expressjs.
	16. Sublime Text.
	17. Git.
	18. Bitbucket.
	19. Mac OS X.
	20. Grunt (as build tool) with following plugin!
		a. [CSSmin](https://github.com/gruntjs/grunt-contrib-cssmin)
		b. [Requirejs](https://github.com/gruntjs/grunt-contrib-requirejs)
		c. [Concat](https://github.com/gruntjs/grunt-contrib-concat)
		d. [JSHint](https://github.com/gruntjs/grunt-contrib-jshint)
		e. [CSSLint](https://github.com/gruntjs/grunt-contrib-csslint)
		f. [Clean](https://github.com/gruntjs/grunt-contrib-clean)
		g. [HTMLmin](https://github.com/gruntjs/grunt-contrib-htmlmin)
		h. [ProcessHTML](https://github.com/dciccale/grunt-processhtml)
		i. [Copy](https://github.com/gruntjs/grunt-contrib-copy)
		k. [Nodemon](https://github.com/ChrisWren/grunt-nodemon)
		l. [Concurrent](https://github.com/sindresorhus/grunt-concurrent)
		m. [Watch](https://github.com/gruntjs/grunt-contrib-watch)
		n. [Sass](https://github.com/gruntjs/grunt-contrib-sass)

## Getting started
In order to run this project in the browser successfully, please follow the steps below!

	1. Clone this repository.
	2. CD to TodoAppTask folder.
	3. Run `npm install` (if it complains then run `sudo npm install`) to install all Grunt plugins(dependencies).
	4. Run `bower install` to install all project dependencies such as backbone, underscore, jquery, requirejs etc, into js/libs folder.
	5. Now run `grunt` command on your terminal in `root` folder of this project.
	6. Now go to your browser and type `localhost:8000` to view this project in action.

## Description
Above steps(in getting started section) will install all dependencies required for this project to run and make the project ready for
production by minifying all the JavaScript and files. It will place the production ready project in `dist` folder in `root`.

## Code Structure

```js
	src
	├── images
	├── index.html
	├── js
	│   ├── collections
	│   │   └── todos.js
	│   ├── config.js
	│   ├── libs
	│   │   ├── backbone
	│   │   ├── backbone.localStorage
	│   │   ├── jquery
	│   │   ├── requirejs
	│   │   └── underscore
	│   ├── main.js
	│   ├── models
	│   │   └── todo.js
	│   ├── plugins
	│   │   └── text.js
	│   └── views
	│       ├── app.js
	│       └── todos.js
	├── styles
	│   ├── css
	│   │   ├── base
	│   │   ├── layout
	│   │   ├── modules
	│   │   ├── styles.css
	│   │   └── utilities
	│   └── sass
	│       ├── base
	│       ├── layout
	│       ├── modules
	│       ├── styles.scss
	│       └── utilities
	└── templates
```
