var qs = function(a){ return document.querySelector(a) };
var qsa = function(a){ return document.querySelectorAll(a) };
var t = lighttest;

var resetElements = qs('reset').innerHTML;
function reset(){
	qs('reset').innerHTML = resetElements;
}

t.start({
	'$("element")':
	function(){
		t.check( $('.one').el[0] === qs('.one') )
		t.check( $('#six').el[0] === qs('#six') )
		t.check( $('five').el[0] === qs('five') )
		t.done()
	},

	'$("element","element",...)':
	function(){
		t.check( $('.one','#six').el[0] === qs('.one') )
		t.check( $('.one','#six').el[1] === qs('#six') )
		t.done()
	},

	'$("*element","*element")':
	function(){
		t.check($('*div','*li').el.length === qsa(['div','li']).length)
		t.done()
	},

	'Selector should return only unique elements':
	function(){
		t.check($('five','#six').el.length === 1)
		t.done()
	},

	'Selector should pass dom objects':
	function(){
		t.check($(qs('#six')).el[0] === qs('#six'))
		t.done()
	},

	'children()':
	function(){
		t.check($('#six').children().el.length===5)
		t.done()
	},

	'css()':
	function(){
		$('div').css({backgroundColor:'red',color:'blue'});
		t.check(qs('div').style.backgroundColor === 'red' && qs('div').style.color === 'blue')
		t.done();		
	},

	'filter()':
	function(){
		t.check($('*div').filter('.one').el.length === 1)
		t.done()
	},

	'find()':
	function(){
		t.check($('#six').find('li').el[0] === qs('li'))
		t.done()
	},

	'get()':
	function(){
		t.check($('*li').get(0).el[0] === qs('li'))
		t.check($('.two').get('data-three') === 'four')
		t.check($('.one').get('class') === 'one')
		t.done()
	},

	'parent()':
	function(){
		t.check($('li').parent().el[0] === qs('five'))
		t.check($('li').parent('div').el[0] === qs('.two'))
		t.done()
	},

	'add()':
	function(){
		$('li').add('text','foo').add('text','bar')
		$('.one').add('class','foo').add('data-foo','bar').add('class','one')

		t.check(qs('li').innerHTML === 'foo bar')
		t.check(qs('.one').className === 'one foo')
		t.check(qs('.one').getAttribute('data-foo') === 'bar')
		t.done()
	},

	'remove()':
	function(){
		reset();
		$('.one').remove('class')
		$('#six').remove('id','six')
		$('li').remove()

		t.check(qs('div').className === '')
		t.check(qs('five').id === '')
		t.check(qs('five').children.length === 4)
		t.done()
	},

	'set()':
	function(){
		reset();
		$('li').set('text','yolo').set('class','foo').set('data-yolo','swag')
		t.check(qs('li').innerHTML === 'yolo')
		t.check(qs('li').className==='foo')
		t.check(qs('li').getAttribute('data-yolo')==='swag')
		t.done()
	},

	'next() prev()':
	function(){
		t.check($('li').next().el[0] === qsa('li')[1])
		t.check($('li').next().prev().el[0] === qs('li'))
		t.done()
	}

})