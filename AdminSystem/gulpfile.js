// 在nodejs环境下运行的js文件
// 按照nodejs的语法使用

// 引用模块: require();  得到一个对象/函数
// gulp,gulp-sass

let gulp = require('gulp');//{task(),}
// let sass = require('gulp-sass');//fn

let babel = require('gulp-babel');

//es6转es5
gulp.task('es6',function(){
	gulp.src('src/js/*.js')
	.pipe(babel({
		'presets':['es2015']
	}))
	.pipe(gulp.dest('dist/js'))//输出
});





// js压缩
let uglify = require('gulp-uglify');
let pump = require('pump');
let concat = require('gulp-concat');
let rename = require('gulp-rename');


gulp.task('uglify',function(){
  return gulp.src('dist/es5/*.js')
  			 .pipe(uglify())
  			 // .pipe(rename('es5-indexjs.min.js'))
  			 .pipe(gulp.dest('dist/js'));
});


//压缩css
let cssmin=require('gulp-cssmin');//引入模块
gulp.task('cssmin',function(){
  return gulp.src('src/css/*.css')
  			 .pipe(cssmin())
  			 // .pipe(rename('index.min.css'))
  			 .pipe(gulp.dest('dist/css'));
});
// gulp.task('commoncssmin',function(){
// 	return gulp.src('src/css/common.css/*.css')
// 				 .pipe(cssmin())
// 				 // .pipe(rename('index.min.css'))
// 				 .pipe(gulp.dest('dist/css/common.css'));
//   });

//压缩图片
let imagemin=require('gulp-imagemin');
gulp.task('imgmin',function(){
  return gulp.src('src/images/*')
  			 .pipe(imagemin())
  			 .pipe(gulp.dest('dist/images'));
});

//开始任务
gulp.task('default',['es6','uglify','cssmin','imgmin']);

// 自动刷新服务器
// let browserSync = require('browser-sync');

// // 静态服务器
// gulp.task('server',()=>{
// 	browserSync({
// 		// 服务器路径
// 		// server:'./src/',

// 		// 代理服务器
// 		proxy:'http://localhost:1802',

// 		// 端口
// 		port:666,

// 		// 监听文件修改，自动刷新
// 		files:['./src/**/*.html','./src/css/*.css','./src/api/*.php']
// 	});

// 	// 监听sass文件修改，并自动编译
// 	gulp.watch('./src/sass/*.scss',['compileSass'])
// })



