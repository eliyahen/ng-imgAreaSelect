# ng-imgAreaSelect

A Angular JS directive for the jQuery [imgAreaSelect plugin](http://odyniec.net/projects/imgareaselect/) by [Michal Wojciechowski](http://odyniec.net/)

**This directive is still in active development. Only use for testing.**

## Demo
[http://Sk1Zy.github.io/ng-imgAreaSelect/
](http://Sk1Zy.github.io/ng-imgAreaSelect/)
## Dependencies
The following dependencies are required.

- Angular JS
- jQuery
- jQuery imgAreaSelect plugin.

## Install
1. download the files
	1. Bower
		1. add `"ng-imgAreaSelect": "latest"` to your `bower.json` file then run `bower install` OR run `bower install ng-imgAreaSelect`
2. include the files in your app
	1. Include jQuery in your page.
	2. Include the imgAreaSelect plugin.
	3. Then include `ng-imgAreaSelect.min.js`
	4. Include the appropriate CSS file from the imgAreaSelect plugin folder.
3. include the module in angular (i.e. in `app.js`) - `ng-imgAreaSelect`


## Documentation

### Usage
Simply put the ng-image-area-select attribute inside an image tag.

    <img ng-image-area-select selection="coords" src="example.jpg" />

The selection attribute specifies a object in which the img area coordinates are to be stored. This attribute is required.

### Options

- **aspectRatio** - A string of the form "width:height" which represents the aspect ratio to maintain. Example: "4:3"
- **autoHide** - If set to true, selection area will disappear when selection ends. Default: false
- **disable** - If set to true, the plugin is disabled (the selection area remains visible, unless hide is also present)
- **enable** - If set to true, the plugin is re-enabled
- **handles** - If set to true, resize handles are shown on the selection area; if set to "corners", only corner - - handles are shown
default: false
- **hide** - If set to true, selection area is hidden
- **imageHeight** - True height of the image (if scaled with the CSS width and height properties)
- **imageWidth** - True width of the image (if scaled with the CSS width and height properties)
- **maxHeight** - Maximum selection height (in pixels)
- **maxWidth** - Maximum selection width (in pixels)
- **minHeight** - Minimum selection height (in pixels)
- **minWidth** - Minimum selection width (in pixels)
- **movable** - Determines whether the selection area should be movable
default: true
- parent	A jQuery object or selector string that specifies the parent element that the plugin will be appended to
default: "body"
- **persistent** - If set to true, clicking outside the selection area will not start a new selection (ie. the user will only be able to move/resize the existing selection area)
default: false
- **remove** - If set to true, the plugin is completely removed
- **resizable** - Determines whether the selection area should be resizable
default: true
- **resizeMargin** - Width (in pixels) of the selection area margin where resize mode is triggered
- **show** - If set to true, selection area is shown
- **x1 and y1** - Coordinates of the top left corner of the initial selection area
- **x2 and y2** - Coordinates of the bottom right corner of the initial selection area

**Example**

    $scope.options = {
		handles: true,
		movable: true,
		resizable: false,
		x1: 5,
		y1: 10,
		x2: 20,
		y2: 25	
	}

This options object is then passed as a value into the ng-img-area-selection attribute.

**Example**

    <img ng-img-area-selection="options" selection="example" />

A full list of all the options can be viewed [here](http://odyniec.net/projects/imgareaselect/usage.html#options).
There are however some options that are read only in this module.

### Selection attribute
The selection attribute contains the variable where the coordinates should be stored.

The properties of the object look like this:

    { x1:int, y1:int, x2: int, y2: int, width: int, height:int }

### Events

As the onInit, onSelectStart, onSelectChange and onSelectEnd callback functions in the imgAreaSelect jQuery plugin are read only in the directive, the directive emits events instead.

- **selectinit**
- **selectstart**
- **selectchange**
- **selectend**

All of these events have the html img tag and the selection coordinates as attributes. 

**Example**

    $scope.$on('init', function(event, args) {
		// Do whatever you want with args.img and args.selection
	});

## Development

1. Pull the master branch to your dev machine.
	1. run `npm install && bower install`
	2. Write your code. Run `grunt server` for live feedback.
	3. Run `grunt uglify`
	4. git commit your changes
2. copy over core files (.js and .css/.less for directives) to master branch
	1. `git checkout master`
	2. `git checkout gh-pages reaSelect.js reaSelect.min.js reaSelect.less reaSelect.css reaSelect.min.css`
3. Push your branch to your account. Then create a pull request.
