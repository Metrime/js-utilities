#DOM

Small (~1.9kb) DOM Manipulation utility.

##Methods

###$(selector)

Returns a new instance.

####selector

String: Searches element with querySelector

Object: Passes object

Array: Searches elements with querySelectorAll

---

**Note:**

For the following examples, where `attribute` is used as a parameter, there are some shortcuts available:

- html -> innerHTML
- text -> innerTEXT
- class -> className

---

###.find(selector)

Exactly what you think it is.

	<div class='foo'>
		<div class='bar'></div>
	</div>
	
	$('.foo').find('.bar')


###.get(attribute)

Returns wanted value.

####attribute

Number: Returns the [number]nth element.

String: Returns either property or attribute of the element, depending on which one exists (properties have a higher priority).

	<div class='foo'></div>
	
	$('.foo').get('class') //foo

###.set(attribute, value)

Similiar method as `.get()`, but replaces property/attribute with given value.

	<div class='foo'></div>
	
	$('.foo')
	.set('class','bar')
	.set('data-foo','bar');
	
	<div class='bar' data-foo='bar'></div>

###.add(attribute, value)

Similiar method as `.get()` and `.set()`, but only adds to a property/attribute if `value` doesn't already exist, except for `innerHTML` and `innerTEXT` (it will simply return `innerHTML/TEXT += value`).

	<div class='foo'></div>
	
	$('.foo')
	.add('class','bar')
	.add('class','bar')
	.add('class','bar')
	.add('class','bar')
	.add('class','bar')
	...
	
	<div class='foo bar'></div>


####Custom attributes (append/prepend)

If value is a string, a documentFragment will be created and appended/prepended to the given element.
If value is an object, it will append/prepend that object.

	<div class='foo'></div>
	
	$('.foo').add('append','<div class="bar"></div>')
	
	<div class='foo'>
		<div class='bar'></div>
	</div>

###.remove(optional attribute, optional value)

If no attribute and no value: Removes element from DOM.

If attribute but no value: Removes property/attribute.

If both given, it will remove value from attribute/property, if it exists.

	<div class='foo bar' data-foo='bar'></div>
	
	$('.foo').remove('class', 'foo');
	
	<div class='bar' data-foo='bar'></div>
	
	$('.bar').remove('data-foo');
	
	<div class='bar'></div>
	
	$('.bar').remove();


###.has(attribute,value)

Checks if a property/attribute has given value.

	<div class='foo bar'></div>
	
	$('.foo').has('class','bar') //true

###.each(callback)

Iterates over elements. Callback returns a new instance of `$()` for each iterated element, as well as the counter as a number.

	<div class='foobars'></div>
	<div class='foobars'></div>
	<div class='foobars'></div>

	$('.foobars').each( function(element,i){
		element.set('data-count', i).remove('class');
	});
	
	<div data-count=0></div>
	<div data-count=1></div>
	<div data-count=2></div>

###.on() / .off()

Just wrappers for `addEventListener` and `removeEventListener`.

###.parent(optional string)

If no argument given, it will return `.parentNode`.

If string is given, it will try to find a parent where nodeName === string, until it reaches the `<body>` (string gets uppercased).

	<foo>
		<bar>
			<div class='foobar'></div>
		</bar>
	</foo>
	
	$('.foobar').parent() // <bar>
	$('.foobar').parent('foo') // <foo>