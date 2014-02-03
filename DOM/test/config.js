var qs = function(a){ return document.querySelector(a) };
var qsa = function(a){ return document.querySelectorAll(a) };
var t = lighttest;

var resetElements = qs('reset').innerHTML;
function reset(){
	qs('reset').innerHTML = resetElements;
}

t.start({
	'$()':
		function(){
			t.check( $('.one').el === qs('.one') )
			t.check( $('#six').el === qs('#six') )
			t.check( $('five').el === qs('five') )
			t.done()
		},
	'.find()':
		function(){
			t.check( $('.two').find('li').el === qs('li') )
			t.done()
		},
	'.get()':
		function(){
			t.check( $('.one').get('class') === 'one' )
			t.check( $('.two').get('data-three') === 'four' )
			t.check( $(['li']).get(0).el === qs('li') )
			t.done()
		},
	'.set()':
		function(){
			$('.one').set('id','aaa').set('data-id','bbb')
			$('li').set('text','ccc')

			t.check( qs('.one').id === 'aaa' )
			t.check( qs('.one').getAttribute('data-id') === 'bbb' )
			t.check( $('li').get('text') === 'ccc' )
			t.done()
		},
	'.add()':
		function(){
			reset();
			$('.one').add('class','two').add('data-three','four').add('data-three','four')
			$('li').add('append','<span></span><span></span>').add('prepend','<div></div>')

			t.check( qs('.one').className === 'one two' )
			t.check( qs('.one').getAttribute('data-three') === 'four' )
			t.check( qs('li').innerHTML === '<div></div><span></span><span></span>' )
			t.done()
		},
	'.remove()':
		function(){
			reset();
			$('.two').remove('class','two').remove('data-three')

			t.check( qsa('div')[1].className === '')
			t.check( qsa('div')[1].getAttribute('data-three') === null)

			$('li').remove();

			t.check( qs('#six').children.length === 4 )

			t.done()
		},
	'.parent()':
		function(){
			reset();

			t.check( $('li').parent().el === qs('#six') )
			t.check( $('li').parent('div').el === qs('.two') )
			t.check( $('li').parent('nonexistent').el === document.body )
			t.done()
		}
});