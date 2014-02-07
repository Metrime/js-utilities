var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var footer = require('gulp-footer');
var tap = require('gulp-tap');
var fs = require('fs');

gulp.task('default',function(){
	var utils = [];
	gulp.src(['../core.js','../*.js'])
	.pipe(footer(';'))
	.pipe(concat('build.js'))
	.pipe(tap(function(file){
		var contents = String(file.contents);
		var matches = contents.match(/require\(.+\)/g);
		matches.forEach(function(match){
			if(/DOM/.test(match)){ contents = contents.replace(match,'') }
			else if(utils.indexOf(match) < 0){
				utils.push(match);
				var split = match.split(/\'|\"/g)[1];
				contents = contents.replace(
					match, fs.readFileSync('../../'+split+'.js','utf8')
				);
			}else{
				contents = contents.replace(match,'')
			}
		});
		file.contents = new Buffer(contents);
		return file;
	}))
	.pipe(uglify())
	.pipe(gulp.dest('./'))
});



gulp.task('watch',function(){
	gulp.watch('../*.js',['default'])
})