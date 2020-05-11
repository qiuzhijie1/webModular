// 引入开发依赖包
const gulp = require('gulp');
const fileInclude = require('gulp-file-include'); //模块化HTML
const less = require('gulp-less'); //解析less
const sass = require('gulp-sass'); //解析sass
const livereload = require('gulp-livereload'); //监听文件的变化
const connect = require('gulp-connect'); //搭建临时服务器
const open = require('open'); //直接运行临时服务器




gulp.task('fileInclude', function () {
    return gulp.src(['src/**/*.html'])
        .pipe(fileInclude({
            indent: true
        }))
        .pipe(gulp.dest('dist/'))
        .pipe(livereload())
        .pipe(connect.reload());
})

gulp.task('less', function () {
    return gulp.src('src/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('src/css/'))
        .pipe(livereload())
        .pipe(connect.reload());
})

gulp.task('sass', function () {
    return gulp.src(['src/sass/*.*', '!src/sass/mixin.*'])
        .pipe(sass())
        .pipe(gulp.dest('src/css/'))
        .pipe(livereload())
        .pipe(connect.reload());
})

gulp.task('css', ['less', 'sass'], function () {
    return gulp.src('src/css/*.css')
        .pipe(gulp.dest('dist/css/'))
        .pipe(livereload())
        .pipe(connect.reload());
})

gulp.task('js', function () {
    return gulp.src('src/js/*.js')
        .pipe(gulp.dest('dist/js/'))
        .pipe(livereload())
        .pipe(connect.reload());

})

gulp.task('default', ['fileInclude', 'css', 'js']);

gulp.task('watch', ['default'], function () {
    livereload.listen(); //开启监听
    gulp.watch('src/**/*.html', ['fileInclude']);
    gulp.watch('src/less/*.less', ['less']);
    gulp.watch('src/sass/*.*', ['sass']);
    gulp.watch('src/css/*.css', ['css']);
    gulp.watch('src/js/*.js', ['js']);
})


gulp.task('webserver', ['default'], function () {
    connect.server({
        root: "dist/",//代理的项目的目录
        port: '9999',　　//端口号
        livereload: false, //不实时修改联动
        host: '::',　　//之前没加这个不能让手机访问，加上这个就可以了

    });
    gulp.watch('src/**/*.html', ['fileInclude']);
    gulp.watch('src/less/*.less', ['less']);
    gulp.watch('src/sass/*.*', ['sass']);
    gulp.watch('src/css/*.css', ['css']);
    gulp.watch('src/js/*.js', ['js']);

    // open('http://127.0.0.1:9999');
    open('http://192.168.0.12:9999'); //此处ip为本机ip的话局域网内均可访问
})