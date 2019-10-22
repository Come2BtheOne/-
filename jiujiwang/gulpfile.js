

//1.压缩html

var minifyhtml = require('gulp-htmlmin');

gulp.task('htmlmin',function() {
	var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: false,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: false,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
  };
  return gulp.src('src/*.html')
  			 .pipe(minifyhtml(options))
  			 .pipe(gulp.dest('dist'));
});

//2.压缩css
var minifycss = require('gulp-cssmin');

gulp.task('cssmin',function() {
	return gulp.src('src/css/css.css')
			   .pipe(minifycss())
			   .pipe(gulp.dest('dist/css'));
});



//4.压缩js
var minifyjs = require('gulp-uglify');
var babel = require('gulp-babel');

gulp.task('jsmin',function() {
	return gulp.src('src/js/common.js')
				.pipe(babel({//es6转es5
					'presets' : ['es2015']
				}))
				.pipe(minifyjs())//压缩js
				.pipe(gulp.dest('dist/js'));//ES6不能直接压缩，需要先转成es5
});

// gulp.task('default',['cssmin','commoncssmin']);


