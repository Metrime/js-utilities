var gulp = require("gulp");
var concat = require("gulp-concat");
var footer = require("gulp-footer");
var uglify = require("gulp-uglify");

gulp.task('default',function(){
	gulp.src(['../core.js','../*.js','!../all.js'])
	.pipe(footer(';'))
	.pipe(concat('all.js'))
	.pipe(uglify())
	.pipe(gulp.dest('../'))
});