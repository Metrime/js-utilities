var gulp = require("gulp");
var concat = require("gulp-concat");
var footer = require("gulp-footer");
var uglify = require("gulp-uglify");
var replace = require("gulp-replace");

gulp.task('default',function(){
	gulp.src(['../core.js','../*.js','!../all.js'])
	.pipe(replace(/require\(.+\)\n/g,''))
	.pipe(footer(';'))
	.pipe(concat('all.js'))
	.pipe(uglify())
	.pipe(gulp.dest('../'))
});