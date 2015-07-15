<img id="logo" align="right" height="90" style="margin: 0 0 20px 20px" src="http://imgh.us/icon_15566.svg">

# bonescss

SCSS/CSS starting-point for every project. Mixes [smacss](https://smacss.com/) namespaced [h5bp](https://github.com/h5bp/html5-boilerplate/) things with other stuff I use all the time. It includes all the nice things from H5BP nicely namespaced using SMACSS

##Installation
There are two ways to install it:

1. add bower to your scss directories then `bower install bonescss`, then `@include` the individual files in your SCSS files
2. Or checkout this repository into your SCSS directory and use it as a boilerplate: `git clone https://github.com/meodai/bonescss.git your-scss-directory`

## _0.settings.scss
### $s-font-base
Used as base font size for all the size mixins and functions. Usually set to the body font size.

### $s-design-width
The with of your app or website. Is used in some size helpers.

### $s-golden
1.61803398875 because designers love to use this ratio ;)

### $s-gutter
the default gutter for gaps and grids

## _1.base.scss
Contains the part H5BP's main.css before [`Author's custom styles`](https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css)

## _2.layout.scss
All rules inslide this file are prefixed with `.l-` and `%l-` but you can overwrite this variable `$layout-selectors: "%l-" ".l-";`

### .l-clearfix
h5bp's [cleafix](https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css#L171)

### .l-size-width
Used as a class for containers. Sets the with of the design and centers it. (Also set it to position relative)

### .l-horizontal-list
Makes a `UL` or `OL` list display horizontally

### .l-horizontal
Does the same then `.l-horizontal-list` but for every element.

### .l-horizontal-samewidth-list
Uses table layout to make a list that is horizontal where the total with of the list is divided by the number of children.

### .l-horizontal-equidistant
Every element inside this container will have equal distances in between.

### .l-table, .l-table-row, .l-table-cell
Used for tablelayouts. Because yes sometimes I use them.
`.l-table-cell` comes with a modifier `.l-table-cell--max` and `.l-table-cell--min`. `.l-table-cell--min` Is always as wide as its contents. and `.l-table-cell--max` as wide as possible inside the table layout.

### .l-horizontal-extremities
Floats all children right and the first one left. Also extends `.l-clerfix`.

### .l-fill
Uses `position:absolute` and fills its context.

### .l-centered
Used for a CSS only modal-box. Will always be centered, scrollable and will have the size of its content. Works in all cool browsers and IE8+.
in order to Make it work you have to use the following DOM structure:

- centered
	- centered-container
		- centered-inner
			- centered-content
				- centered-body

If you don't need to support uncool browser is suggest you use the mixin `absolute-center()`.

## _3.helpers.scss
The helpers are mostly text helpers. This is why the rules are prefixed with `%t-` and `.t-`, this can be changed by overwriting: `$text-selectors: "%t-" ".t-";`

### .t-selectable, .t-not-selectable
Will set `user-select: none;` or `user-select: text;`.

### [.t-antialiased](http://stackoverflow.com/questions/11459746/css3-webfont-smoothing-and-antialiasing-in-firefox-and-opera)

	-webkit-font-smooting: antialiased;
    -moz-osx-font-smoothing: grayscale;

### .t-truncate
Will [trucate text](http://css-tricks.com/snippets/css/truncate-string-with-ellipsis/) using overflow ellipsis. Does need a fixed width.

## _4.print.scss
The print part from H5BP [main.css](https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css#L203)

## _5.states.scss
In SMACSS states are prefixed with `.is-` but here as well you can modify this with:

	$state-selectors: "%is-" ".is-";
	$state-selectors-and: "&%is-" "&.is-";

### .is-visuallyhidden & .is-visuallyhidden-focusable
Hide only visually, but have it available for screen readers. [H5BP](h5bp.com/v)

### .is-invisible
Hide visually and from screen readers, but maintain layout

### .is-disabled
Generic class to make any element disabled by removing pointer events and lower the opacity

### .is-hidden
Hide visually and from screen readers: [H5BP](h5bp.com/u)

### .is-visible
Used to show elements. Will set to inherit by default, but can be block inline or inline-block as well just use the modifiers `--block`, `--inline` or `--inline-block`.

### .is-loading
Generic loading class. Will make elements with this class pulsate.

## _mixins.scss
Includes all the mixins and functions

### tools-size.scss

#### px2percent ($size,$contextSize)
Converts any size into percents. If in some PSD file your design is 1024px wide and some sidebar in this design has a width of 300px you would use the function like this:
`width: px2percent(300px,1024px)`

#### px2rel($px, $baseSize, $unit)
Will convert any pixel unit to a relative unit. Usually used to convert font-sizes.
If for example your `h1` should have a font-size of 40px and your base font-size is 16px. The function would be used as such: `font-size: px2rel(40px, 16px)`
The defult unit will be `rem` you can set it to something else (like EM) by using the third argument. If you set $s-font-base in your options somewhere you don't have to pass the second argument.

#### font-size($px)
Sets a font size with a PX fallback for oldbrowsers
`font-size: font-size(16px)`
will result in

	font-size: 16px;
	font-size: 1rem:

#### line-height($px)
Set a line-height with a PX fallback exacly as the font-size function


###tools-shape.scss

#### triangle( $height, $color, $direction, $width )
Creates a CSS triagnle using the [border trick.](http://css-tricks.com/snippets/css/css-triangle/) if `$width` is not set it will be the same as the height.

#### circle( $size, $color )
Make a circle of a given color using border radius


## Contributors

Logo: (CC) [Alexandra Hawkhead](http://alexhawkhead.com/)
